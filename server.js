const express = require("express");
const cron = require("node-cron");
const { updateStatus } = require("./status-checker");
const fs = require("fs");
const path = require("path");
const config = require("./config");

const app = express();
const dataDir = path.join(__dirname, 'data');
const statusFile = path.join(dataDir, 'status.json');

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Create initial status file if it doesn't exist
if (!fs.existsSync(statusFile)) {
  fs.writeFileSync(statusFile, JSON.stringify({}));
}

// Update status on schedule
cron.schedule(config.monitoring.interval, () => {
  updateStatus();
});

// Initial status check
updateStatus();

app.get("/status", (req, res) => {
  try {
    if (!fs.existsSync(statusFile)) {
      return res.json({ message: "Status check in progress..." });
    }
    const status = JSON.parse(fs.readFileSync(statusFile));
    res.json(status);
  } catch (error) {
    console.error("Error reading status:", error);
    res.status(500).json({ error: "Status check in progress, please try again." });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(config.server.port, () => {
  console.log(`Status server running on port ${config.server.port}`);
});
const fetch = require('node-fetch');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
const cron = require('node-cron');
const config = require('./config');
const instances = require('./instances');

const recipientsConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'recipients.json'))
);

// Email configuration
const transporter = nodemailer.createTransport(config.email);

// ... rest of your existing functions ...

// Schedule daily summary
cron.schedule(config.monitoring.dailyReport, sendDailySummary);

async function updateStatus() {
    const status = {};
    const statusFile = path.join(__dirname, 'data', 'status.json');
    
    for (const instance of instances) {
        status[instance.name] = {
            opac: await checkStatus(instance.opac, instance, 'Public Catalog'),
            staff: await checkStatus(instance.staff, instance, 'Staff Interface'),
            timestamp: new Date().toISOString()
        };
    }
    
    fs.writeFileSync(statusFile, JSON.stringify(status));
}

module.exports = { updateStatus };
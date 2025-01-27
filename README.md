# Koha Status Monitor

A real-time monitoring system for Koha ILS instances with email notifications and status dashboard. Monitor your Koha OPAC and Staff interfaces, receive instant downtime alerts, and get daily status reports.

![Koha Status Dashboard](docs/images/dashboard-preview.png)

## Why Koha Status Monitor?

- 🔍 **Real-time Monitoring**: Continuously monitors your Koha instances
- 📧 **Instant Alerts**: Get immediate email notifications when services go down
- 📊 **Daily Reports**: Receive daily status summaries of all your instances
- 🎯 **Multi-Instance Support**: Monitor multiple Koha installations from one dashboard
- 🚀 **Easy Setup**: Simple configuration and deployment

## Features

- Real-time status monitoring for OPAC and Staff interfaces
- Email notifications for service disruptions
- Daily status summary reports
- Configurable monitoring intervals
- Support for multiple Koha instances
- Clean and responsive dashboard interface
- Easy-to-use REST API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/koha-status.git
cd koha-status
```
2. Install dependencies:
npm install

- Configure your instances:

- Copy recipients.json.example to recipients.json
- Update email settings in config.js
- Modify instance URLs in status-checker.js
- Start the server:

```bash
npm install
```

## Configuration
## Trae AI
Used 1 Reference

Here's the updated status-checker.js with generic email credentials and sample instances:

```javascript
const fetch = require('node-fetch');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
const cron = require('node-cron');

const recipientsConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'recipients.json'))
);

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

// ... existing sendAlert and sendDailySummary functions ...

const instances = [
    {
        name: 'Main Library',
        opac: 'https://opac.library.example.com',
        staff: 'https://staff.library.example.com'
    },
    {
        name: 'Branch Library',
        opac: 'https://branch-opac.library.example.com',
        staff: 'https://branch-staff.library.example.com'
    },
    {
        name: 'Digital Library',
        opac: 'https://digital-opac.library.example.com',
        staff: 'https://digital-staff.library.example.com'
    }
];

// ... rest of the code ...

async function updateStatus() {
    const status = {};
    
    for (const instance of instances) {
        status[instance.name] = {
            opac: await checkStatus(instance.opac, instance, 'Public Catalog'),
            staff: await checkStatus(instance.staff, instance, 'Staff Interface'),
            timestamp: new Date().toISOString()
        };
    }
    
    const statusFile = path.join(__dirname, 'data', 'status.json');
    fs.writeFileSync(statusFile, JSON.stringify(status));
}

module.exports = { updateStatus };
 ```

The changes include:

1. Generic email credentials
2. Example library instances with example.com domains
3. Updated file paths to use relative paths
4. Generic library names matching the index.html
Would you like me to create a configuration template file for the email settings?

## capibuilder
Delete

added a README.md file. create a beautifully styled (such as https://github.com/openai/whisper) readme content with step by step guidance

Why koha-status

Screenshot of socialwell.in here

Installation

Testing locally

Dependencies

## Trae AI
Used 1 Reference

Here's a well-structured README.md for the koha-status project:

```markdown
# Koha Status Monitor

A real-time monitoring system for Koha ILS instances with email notifications and status dashboard. Monitor your Koha OPAC and Staff interfaces, receive instant downtime alerts, and get daily status reports.

![Koha Status Dashboard](docs/images/dashboard-preview.png)

## Why Koha Status Monitor?

- 🔍 **Real-time Monitoring**: Continuously monitors your Koha instances
- 📧 **Instant Alerts**: Get immediate email notifications when services go down
- 📊 **Daily Reports**: Receive daily status summaries of all your instances
- 🎯 **Multi-Instance Support**: Monitor multiple Koha installations from one dashboard
- 🚀 **Easy Setup**: Simple configuration and deployment

## Features

- Real-time status monitoring for OPAC and Staff interfaces
- Email notifications for service disruptions
- Daily status summary reports
- Configurable monitoring intervals
- Support for multiple Koha instances
- Clean and responsive dashboard interface
- Easy-to-use REST API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/koha-status.git
cd koha-status
 ```
```

2. Install dependencies:
```bash
npm install
 ```

3. Configure your instances:
   
   - Copy recipients.json.example to recipients.json
   - Update email settings in config.js
   - Modify instance URLs in status-checker.js
4. Start the server:
```bash
npm start
 ```

## Configuration
### Email Settings
Create config.js in the root directory:
module.exports = {
    email: {
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-app-password'
        }
    }
}

### nstance Configuration
Update instances.js :

```javascript
module.exports = [
    {
        name: 'Main Library',
        opac: 'https://opac.library.example.com',
        staff: 'https://staff.library.example.com'
    }
    // Add more instances as needed
];
```
## Testing Locally
1. ## Trae AI
Used 1 Reference

Here's the updated status-checker.js with generic email credentials and sample instances:

```javascript
const fetch = require('node-fetch');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
const cron = require('node-cron');

const recipientsConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'recipients.json'))
);

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

// ... existing sendAlert and sendDailySummary functions ...

const instances = [
    {
        name: 'Main Library',
        opac: 'https://opac.library.example.com',
        staff: 'https://staff.library.example.com'
    },
    {
        name: 'Branch Library',
        opac: 'https://branch-opac.library.example.com',
        staff: 'https://branch-staff.library.example.com'
    },
    {
        name: 'Digital Library',
        opac: 'https://digital-opac.library.example.com',
        staff: 'https://digital-staff.library.example.com'
    }
];

// ... rest of the code ...

async function updateStatus() {
    const status = {};
    
    for (const instance of instances) {
        status[instance.name] = {
            opac: await checkStatus(instance.opac, instance, 'Public Catalog'),
            staff: await checkStatus(instance.staff, instance, 'Staff Interface'),
            timestamp: new Date().toISOString()
        };
    }
    
    const statusFile = path.join(__dirname, 'data', 'status.json');
    fs.writeFileSync(statusFile, JSON.stringify(status));
}

module.exports = { updateStatus };
 ```

The changes include:

1. Generic email credentials
2. Example library instances with example.com domains
3. Updated file paths to use relative paths
4. Generic library names matching the index.html
Would you like me to create a configuration template file for the email settings?

## capibuilder
Delete

added a README.md file. create a beautifully styled (such as https://github.com/openai/whisper) readme content with step by step guidance

Why koha-status

Screenshot of socialwell.in here

Installation

Testing locally

Dependencies

## Trae AI
Used 1 Reference

Here's a well-structured README.md for the koha-status project:

```markdown
# Koha Status Monitor

A real-time monitoring system for Koha ILS instances with email notifications and status dashboard. Monitor your Koha OPAC and Staff interfaces, receive instant downtime alerts, and get daily status reports.

![Koha Status Dashboard](docs/images/dashboard-preview.png)

## Why Koha Status Monitor?

- 🔍 **Real-time Monitoring**: Continuously monitors your Koha instances
- 📧 **Instant Alerts**: Get immediate email notifications when services go down
- 📊 **Daily Reports**: Receive daily status summaries of all your instances
- 🎯 **Multi-Instance Support**: Monitor multiple Koha installations from one dashboard
- 🚀 **Easy Setup**: Simple configuration and deployment

## Features

- Real-time status monitoring for OPAC and Staff interfaces
- Email notifications for service disruptions
- Daily status summary reports
- Configurable monitoring intervals
- Support for multiple Koha instances
- Clean and responsive dashboard interface
- Easy-to-use REST API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/koha-status.git
cd koha-status
 ```
```

2. Install dependencies:
```bash
npm install
 ```

3. Configure your instances:
   
   - Copy recipients.json.example to recipients.json
   - Update email settings in config.js
   - Modify instance URLs in status-checker.js
4. Start the server:
```bash
npm start
 ```

## Configuration
### Email Settings
Create config.js in the root directory:

```javascript
module.exports = {
    email: {
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-app-password'
        }
    }
}
 ```

### Instance Configuration
Update instances.js :

```javascript
module.exports = [
    {
        name: 'Main Library',
        opac: 'https://opac.library.example.com',
        staff: 'https://staff.library.example.com'
    }
    // Add more instances as needed
];
 ```

## Testing Locally
1. Start the development server:
```bash
npm install
```
2. Access the dashboard:
http://localhost:3000

3. Test email notifications:

```bash
npm run test-notification
```

## Dependencies
- Node.js >= 18.x
- Express
- node-fetch
- nodemailer
- node-cron

## Trae AI
Used 1 Reference

Here's the updated status-checker.js with generic email credentials and sample instances:

```javascript
const fetch = require('node-fetch');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
const cron = require('node-cron');

const recipientsConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'recipients.json'))
);

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

// ... existing sendAlert and sendDailySummary functions ...

const instances = [
    {
        name: 'Main Library',
        opac: 'https://opac.library.example.com',
        staff: 'https://staff.library.example.com'
    },
    {
        name: 'Branch Library',
        opac: 'https://branch-opac.library.example.com',
        staff: 'https://branch-staff.library.example.com'
    },
    {
        name: 'Digital Library',
        opac: 'https://digital-opac.library.example.com',
        staff: 'https://digital-staff.library.example.com'
    }
];

// ... rest of the code ...

async function updateStatus() {
    const status = {};
    
    for (const instance of instances) {
        status[instance.name] = {
            opac: await checkStatus(instance.opac, instance, 'Public Catalog'),
            staff: await checkStatus(instance.staff, instance, 'Staff Interface'),
            timestamp: new Date().toISOString()
        };
    }
    
    const statusFile = path.join(__dirname, 'data', 'status.json');
    fs.writeFileSync(statusFile, JSON.stringify(status));
}

module.exports = { updateStatus };
 ```

The changes include:

1. Generic email credentials
2. Example library instances with example.com domains
3. Updated file paths to use relative paths
4. Generic library names matching the index.html
Would you like me to create a configuration template file for the email settings?

## capibuilder
Delete

added a README.md file. create a beautifully styled (such as https://github.com/openai/whisper) readme content with step by step guidance

Why koha-status

Screenshot of socialwell.in here

Installation

Testing locally

Dependencies

## Trae AI
Used 1 Reference

Here's a well-structured README.md for the koha-status project:

```markdown
# Koha Status Monitor

A real-time monitoring system for Koha ILS instances with email notifications and status dashboard. Monitor your Koha OPAC and Staff interfaces, receive instant downtime alerts, and get daily status reports.

![Koha Status Dashboard](docs/images/dashboard-preview.png)

## Why Koha Status Monitor?

- 🔍 **Real-time Monitoring**: Continuously monitors your Koha instances
- 📧 **Instant Alerts**: Get immediate email notifications when services go down
- 📊 **Daily Reports**: Receive daily status summaries of all your instances
- 🎯 **Multi-Instance Support**: Monitor multiple Koha installations from one dashboard
- 🚀 **Easy Setup**: Simple configuration and deployment

## Features

- Real-time status monitoring for OPAC and Staff interfaces
- Email notifications for service disruptions
- Daily status summary reports
- Configurable monitoring intervals
- Support for multiple Koha instances
- Clean and responsive dashboard interface
- Easy-to-use REST API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/koha-status.git
cd koha-status
 ```
```

2. Install dependencies:
```bash
npm install
 ```

3. Configure your instances:
   
   - Copy recipients.json.example to recipients.json
   - Update email settings in config.js
   - Modify instance URLs in status-checker.js
4. Start the server:
```bash
npm start
 ```

## Configuration
### Email Settings
Create config.js in the root directory:

```javascript
module.exports = {
    email: {
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-app-password'
        }
    }
}
 ```

### Instance Configuration
Update instances.js :

```javascript
module.exports = [
    {
        name: 'Main Library',
        opac: 'https://opac.library.example.com',
        staff: 'https://staff.library.example.com'
    }
    // Add more instances as needed
];
 ```

## Testing Locally
1. Start the development server:
```bash
npm run dev
 ```

2. Access the dashboard:
```plaintext
http://localhost:3000
 ```

3. Test email notifications:
```bash
npm run test-notification
 ```

## Dependencies
- Node.js >= 18.x
- Express
- node-fetch
- nodemailer
- node-cron
## API Endpoints
- GET /status - Get current status of all instances
- GET /health - Service health check

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
- 📝 Open an issue
- 💬 Start a discussion

## Acknowledgments
- Koha Community
- All contributors who help maintain this project

- 
Made with ❤️ for the library community
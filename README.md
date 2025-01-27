# Koha Status Monitor

A real-time monitoring system for Koha ILS instances with email notifications and status dashboard. Monitor your Koha OPAC and Staff interfaces, receive instant downtime alerts, and get daily status reports.

![Koha Status Dashboard](https://github.com/user-attachments/assets/8555b3de-dd11-49fd-b1da-08df9db29902)

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
git clone https://github.com/ai4libraries/koha-status-monitor.git
cd koha-status
```
2. Install dependencies:
- Configure your instances:
- Copy recipients.json.example to recipients.json
- Update email settings in config.js
- Modify instance URLs in status-checker.js
- Start the server:

```bash
npm install
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
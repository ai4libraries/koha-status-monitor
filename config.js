module.exports = {
    email: {
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-app-password'
        }
    },
    server: {
        port: process.env.PORT || 3000
    },
    monitoring: {
        interval: '*/30 * * * *', // every 30 minutes
        dailyReport: '0 9 * * *'  // 9 AM daily
    }
};
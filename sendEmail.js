const { sendEmail } = require('./malitio');

const senderEmail = 'your_email@gmail.com';
const senderPassword = 'your_password';
const recipientEmail = 'recipient@example.com';
const subject = 'Hello from Malitio';
const message = 'This is a test email sent using Malitio.';

sendEmail(senderEmail, senderPassword, recipientEmail, subject, message);

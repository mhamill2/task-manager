const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'michael.hamill3@gmail.com',
    subject: 'Thanks for joining!',
    text: `Welcome to the application, ${name}! Leave us a review and tell us how we can improve your experience!`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'michael.hamill3@gmail.com',
    subject: 'Farewell!',
    text: `Sorry to see you go, ${name}! Leave us a review and tell us how we could have improve your experience!`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};

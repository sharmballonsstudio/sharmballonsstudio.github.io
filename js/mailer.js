const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'drevaver0904.gmail.com',
    pass: 'danya090407'
  }
})

const mailOptions = {
  from: 'drevaver0904.gmail.com',
  to: 'drevaver0904.gmail.com',
  subject:'НОВЫЙ ЗАКАЗ',
  text:'txt'
}

transporter.sendMail(mailOptions, error => {
  console.log(error);
})

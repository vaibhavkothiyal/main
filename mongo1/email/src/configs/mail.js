const nodemailer=require('nodemailer')

module.exports=nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "6d882c1dc71389",
      pass: "277c4fd879223d",
    },
  });
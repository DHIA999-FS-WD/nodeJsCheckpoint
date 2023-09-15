var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "myEmail@gmail.com",
    pass: "mypassword",
  },
});

var mailOptions = {
  from: "myEmail@gmail.com",
  to: "test@gmail.com",
  subject: "Sending Email using Node.js",
  text: "hello this from dhia!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

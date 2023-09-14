const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ishimweeric361@gmail.com",
    pass: "Test123Test123@",
  },
});

export default transporter;

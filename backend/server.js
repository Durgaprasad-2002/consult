const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mjml2html = require("mjml");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

app.use(
  cors({
    origin: process.env.ALLOW_ORIGIN,
  })
);

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const compileMJML = (templatePath, data) => {
  let template = fs.readFileSync(templatePath, "utf8");
  for (const key in data) {
    template = template.replaceAll(`{{${key}}}`, data[key]);
  }
  return mjml2html(template).html;
};

app.post("/contact", async (req, res) => {
  const { name, phone, email, message } = req.body;

  console.log(req.body);

  try {
    const thankYouHtml = compileMJML("./templates/thankYou.mjml", { name });
    const userDataHtml = compileMJML("./templates/userData.mjml", {
      name,
      phone,
      email,
      message,
    });

    // Email to customer
    await transporter.sendMail({
      from: `"Varma Placements" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Contacting Us",
      html: thankYouHtml,
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: userDataHtml,
    });

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

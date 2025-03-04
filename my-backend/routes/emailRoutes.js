// routes/emailRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const transporter = require('../config/nodemailerConfig');

const upload = multer({ dest: 'uploads/' }); // Directory to store uploaded files

// API endpoint to send email with attachments for applications
router.post('/send-application', upload.fields([
  { name: 'identification', maxCount: 1 },
  { name: 'proofOfIncome', maxCount: 1 },
  { name: 'bankStatements', maxCount: 1 },
  { name: 'additionalDocs', maxCount: 1 },
]), (req, res) => {
  const { name, email, phone, loanAmount, loanPurpose, employmentStatus, monthlyIncome, existingDebts, creditScore, terms, privacy } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Application Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLoan Amount: ${loanAmount}\nLoan Purpose: ${loanPurpose}\nEmployment Status: ${employmentStatus}\nMonthly Income: ${monthlyIncome}\nExisting Debts: ${existingDebts}\nCredit Score: ${creditScore}\nTerms Accepted: ${terms}\nPrivacy Accepted: ${privacy}`,
    attachments: [
      { filename: req.files['identification'][0].originalname, path: req.files['identification'][0].path },
      { filename: req.files['proofOfIncome'][0].originalname, path: req.files['proofOfIncome'][0].path },
      { filename: req.files['bankStatements'][0].originalname, path: req.files['bankStatements'][0].path },
      { filename: req.files['additionalDocs'] ? req.files['additionalDocs'][0].originalname : '', path: req.files['additionalDocs'] ? req.files['additionalDocs'][0].path : '' },
    ].filter(Boolean), // Filter out any undefined attachments
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'Error sending email' });
    }
    res.status(200).send({ success: true, message: 'Email sent successfully' });
  });
});

// API endpoint to send email for contact form (without file uploads)
router.post('/send-contact-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'Error sending email' });
    }
    res.status(200).send({ success: true, message: 'Email sent successfully' });
  });
});

module.exports = router;
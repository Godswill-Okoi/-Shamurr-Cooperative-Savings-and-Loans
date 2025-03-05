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
  { name: 'bankStatement', maxCount: 1 },
  { name: 'proofOfBusinessOwnership', maxCount: 1 }
]), (req, res) => {
  const {
    name,
    address,
    phone,
    gender,
    email,
    dateOfBirth,
    maritalStatus,
    numberOfDependants,
    businessName,
    businessAddress,
    businessType,
    businessSector,
    yearsInOperation,
    annualRevenue,
    numberOfEmployees,
    loanAmount,
    loanPurpose,
    repaymentTerm,
    repaymentTermType,
    interestRate,
    processingFees,
    collateral,
    bankName,
    accountNumber,
    bvn,
    nin,
    personalReferenceName,
    personalReferencePhone,
    businessReferenceName,
    businessReferencePhone,
    termsAgreement
  } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Loan Application Submission',
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Loan Application</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
        
        body {
          font-family: 'Inter', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        
        .email-container {
          max-width: 800px;
          margin: 0 auto;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        
        .email-header {
          background-color: #007bff;
          color: white;
          text-align: center;
          padding: 20px;
        }
        
        .email-header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        
        .email-section {
          padding: 20px;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .email-section-title {
          color: #007bff;
          border-bottom: 2px solid #007bff;
          padding-bottom: 10px;
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 600;
        }
        
        .email-detail-row {
          display: flex;
          margin-bottom: 12px;
        }
        
        .email-detail-label {
          font-weight: 600;
          width: 200px;
          color: #495057;
        }
        
        .email-detail-value {
          flex-grow: 1;
          color: #212529;
        }
        
        @media screen and (max-width: 600px) {
          .email-detail-row {
            flex-direction: column;
          }
          
          .email-detail-label {
            width: 100%;
            margin-bottom: 5px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>Loan Application Submission</h1>
        </div>
        
        <div class="email-section">
          <h2 class="email-section-title">Personal Information</h2>
          <div class="email-detail-row">
            <div class="email-detail-label">Name:</div>
            <div class="email-detail-value">${name}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Address:</div>
            <div class="email-detail-value">${address}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Phone:</div>
            <div class="email-detail-value">${phone}</div>
          </div>
        </div>
        
        <div class="email-section">
          <h2 class="email-section-title">Business Details</h2>
          <div class="email-detail-row">
            <div class="email-detail-label">Business Name:</div>
            <div class="email-detail-value">${businessName}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Business Sector:</div>
            <div class="email-detail-value">${businessSector}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Annual Revenue:</div>
            <div class="email-detail-value">${annualRevenue}</div>
          </div>
        </div>
        
        <div class="email-section">
          <h2 class="email-section-title">Loan Details</h2>
          <div class="email-detail-row">
            <div class="email-detail-label">Loan Amount:</div>
            <div class="email-detail-value">${loanAmount}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Loan Purpose:</div>
            <div class="email-detail-value">${loanPurpose}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Repayment Term:</div>
            <div class="email-detail-value">${repaymentTerm} ${repaymentTermType}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
    `,
    attachments: [
      req.files['identification'] ? { filename: req.files['identification'][0].originalname, path: req.files['identification'][0].path } : null,
      req.files['bankStatement'] ? { filename: req.files['bankStatement'][0].originalname, path: req.files['bankStatement'][0].path } : null,
      req.files['proofOfBusinessOwnership'] ? { filename: req.files['proofOfBusinessOwnership'][0].originalname, path: req.files['proofOfBusinessOwnership'][0].path } : null,
    ].filter(Boolean), // Filter out any undefined attachments
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'Error sending email' });
    }
    res.status(200).send({ success: true, message: 'Email sent successfully' });
  });
});

// Contact form email route
router.post('/send-contact-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: subject,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
        
        body {
          font-family: 'Inter', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        
        .email-header {
          background-color: #28a745;
          color: white;
          text-align: center;
          padding: 20px;
        }
        
        .email-header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        
        .email-section {
          padding: 20px;
        }
        
        .email-label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 5px;
          display: block;
        }
        
        .email-content {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 4px;
          border: 1px solid #e9ecef;
        }
        
        @media screen and (max-width: 600px) {
          .email-container {
            width: 100%;
            border-radius: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>Contact Form Submission</h1>
        </div>
        <div class="email-section">
          <div>
            <span class="email-label">Name:</span>
            <div class="email-content">${name}</div>
          </div>
          <div>
            <span class="email-label">Email:</span>
            <div class="email-content">${email}</div>
          </div>
          <div>
            <span class="email-label">Subject:</span>
            <div class="email-content">${subject}</div>
          </div>
          <div>
            <span class="email-label">Message:</span>
            <div class="email-content">${message}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'Error sending email' });
    }
    res.status(200).send({ success: true, message: 'Email sent successfully' });
  });
});

// Membership application route
router.post('/become-a-member', (req, res) => {
  const {
    name,
    email,
    phoneNo,
    address,
    occupationBusiness,
    employer,
    membershipType,
    referreeName,
    referreeAddress,
    referreePhoneNo,
    submissionDate,
    termsAgreement,
    reasonForMembership
  } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Membership Application',
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Membership Application</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
        
        body {
          font-family: 'Inter', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        
        .email-container {
          max-width: 700px;
          margin: 0 auto;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        
        .email-header {
          background-color: #6f42c1;
          color: white;
          text-align: center;
          padding: 20px;
        }
        
        .email-header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        
        .email-section {
          padding: 20px;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .email-section-title {
          color: #6f42c1;
          border-bottom: 2px solid #6f42c1;
          padding-bottom: 10px;
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 600;
        }
        
        .email-detail-row {
          display: flex;
          margin-bottom: 12px;
        }
        
        .email-detail-label {
          font-weight: 600;
          width: 200px;
          color: #495057;
        }
        
        .email-detail-value {
          flex-grow: 1;
          color: #212529;
        }
        
        @media screen and (max-width: 600px) {
          .email-detail-row {
            flex-direction: column;
          }
          
          .email-detail-label {
            width: 100%;
            margin-bottom: 5px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>Membership Application</h1>
        </div>
        
        <div class="email-section">
          <h2 class="email-section-title">Personal Details</h2>
          <div class="email-detail-row">
            <div class="email-detail-label">Name:</div>
            <div class="email-detail-value">${name}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Email:</div>
            <div class="email-detail-value">${email}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Phone No:</div>
            <div class="email-detail-value">${phoneNo}</div>
          </div>
        </div>
        
        <div class="email-section">
          <h2 class="email-section-title">Professional Details</h2>
          <div class="email-detail-row">
            <div class="email-detail-label">Occupation/Business:</div>
            <div class="email-detail-value">${occupationBusiness}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Employer:</div>
            <div class="email-detail-value">${employer}</div>
          </div>
        </div>
        
        <div class="email-section">
          <h2 class="email-section-title">Referral Details</h2>
          <div class="email-detail-row">
            <div class="email-detail-label">Referee Name:</div>
            <div class="email-detail-value">${referreeName}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Referee Address:</div>
            <div class="email-detail-value">${referreeAddress}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Referee Phone No:</div>
            <div class="email-detail-value">${referreePhoneNo}</div>
          </div>
        </div>
        
        <div class="email-section">
          <h2 class="email-section-title">Submission Details</h2>
          <div class="email-detail-row">
            <div class="email-detail-label">Submission Date:</div>
            <div class="email-detail-value">${submissionDate}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Terms Agreement:</div>
            <div class="email-detail-value">${termsAgreement ? 'Yes' : 'No'}</div>
          </div>
          <div class="email-detail-row">
            <div class="email-detail-label">Reason for Membership:</div>
            <div class="email-detail-value">${reasonForMembership}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'Error sending email' });
    }
    res.status(200).send({ success: true, message: 'Email sent successfully' });
  });
});

module.exports = router;
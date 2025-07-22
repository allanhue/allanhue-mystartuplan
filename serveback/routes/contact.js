// Contact form routes
const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const { pool, DatabaseQueries } = require('../config/database');

const router = express.Router();

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Validation middleware
const validateContactForm = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  body('company').optional().trim(),
  body('service').optional().trim()
];

// POST /api/contact - Submit contact form
router.post('/', validateContactForm, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, company, service, message } = req.body;

    // Save to database
    const result = await pool.query(
      DatabaseQueries.CREATE_CONTACT,
      [name, email, company || null, service || null, message]
    );

    const contactId = result.rows[0].id;

    // Send email notification
    try {
      const transporter = createTransporter();
      
      // Email to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission - ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>Contact ID: ${contactId}</small></p>
        `
      };

      // Auto-reply to client
      const clientMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting TechSolutions Pro',
        html: `
          <h2>Thank you for your inquiry!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to TechSolutions Pro. We have received your message and will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <p>Best regards,<br>TechSolutions Pro Team</p>
        `
      };

      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(clientMailOptions);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      contactId: contactId
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form'
    });
  }
});

// GET /api/contact - Get all contacts (admin only)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(DatabaseQueries.GET_CONTACTS);
    
    res.json({
      success: true,
      contacts: result.rows
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve contacts'
    });
  }
});

module.exports = router;

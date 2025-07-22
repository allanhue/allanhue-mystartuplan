// Project inquiry routes
const express = require('express');
const { body, validationResult } = require('express-validator');
const { pool, DatabaseQueries } = require('../config/database');

const router = express.Router();

// Validation middleware
const validateProjectInquiry = [
  body('client_name').trim().isLength({ min: 2 }).withMessage('Client name must be at least 2 characters'),
  body('client_email').isEmail().withMessage('Please provide a valid email'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('project_type').optional().trim(),
  body('budget_range').optional().trim(),
  body('timeline').optional().trim()
];

// POST /api/projects - Submit project inquiry
router.post('/', validateProjectInquiry, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { client_name, client_email, project_type, budget_range, timeline, description } = req.body;

    const result = await pool.query(
      DatabaseQueries.CREATE_PROJECT_INQUIRY,
      [client_name, client_email, project_type, budget_range, timeline, description]
    );

    res.status(201).json({
      success: true,
      message: 'Project inquiry submitted successfully',
      inquiryId: result.rows[0].id
    });

  } catch (error) {
    console.error('Project inquiry error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit project inquiry'
    });
  }
});

// GET /api/projects - Get all project inquiries (admin only)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(DatabaseQueries.GET_PROJECT_INQUIRIES);
    
    res.json({
      success: true,
      inquiries: result.rows
    });
  } catch (error) {
    console.error('Get project inquiries error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve project inquiries'
    });
  }
});

module.exports = router;

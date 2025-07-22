const express = require('express');
const router = express.Router();

// POST /api/quote - Request a project quote
router.post('/', async (req, res) => {
  try {
    const { name, email, company, projectType, budget, description, timeline } = req.body;

    if (!name || !email || !projectType || !description) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, projectType, description'
      });
    }

    const quote = {
      id: Date.now(),
      name,
      email,
      company: company || '',
      projectType,
      budget: budget || '',
      description,
      timeline: timeline || '',
      status: 'pending',
      submittedAt: new Date()
    };

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully',
      data: quote
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit quote request',
      error: error.message
    });
  }
});

module.exports = router;

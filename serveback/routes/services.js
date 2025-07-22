// Services routes
const express = require('express');
const { pool, DatabaseQueries } = require('../config/database');

const router = express.Router();
const cors = require('cors');

router.use(cors({
  origin: [
    'https://lanstarter.netlify.app',
    'http://localhost:5173', // for local development
    'http://localhost:3000'  // alternative local port
  ],
  credentials: true
}));

// GET /api/services - Get all active services
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(DatabaseQueries.GET_SERVICES);
    
    res.json({
      success: true,
      services: result.rows
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve services'
    });
  }
});

// POST /api/services - Create new service (admin only)
router.post('/', async (req, res) => {
  try {
    const { name, description, features, price_range, active = true, display_order = 0 } = req.body;

    const result = await pool.query(
      DatabaseQueries.CREATE_SERVICE,
      [name, description, JSON.stringify(features), price_range, active, display_order]
    );

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      serviceId: result.rows[0].id
    });
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create service'
    });
  }
});

module.exports = router;

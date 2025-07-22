const express = require('express');
const router = express.Router();

// GET /api/portfolio - Get all portfolio items
router.get('/', async (req, res) => {
  try {
    const mockPortfolio = [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '/images/portfolio/ecommerce.jpg',
        liveUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/techsolutions/ecommerce',
        category: 'web-development',
        completedAt: new Date('2024-01-15')
      }
    ];

    res.json({
      success: true,
      data: mockPortfolio,
      count: mockPortfolio.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio items',
      error: error.message
    });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

// GET /api/analytics/dashboard - Get dashboard analytics
router.get('/dashboard', async (req, res) => {
  try {
    const mockAnalytics = {
      totalProjects: 45,
      activeClients: 23,
      completedProjects: 42,
      revenue: 125000,
      monthlyGrowth: 15.5,
      topServices: [
        { name: 'Web Development', count: 18 },
        { name: 'Mobile Apps', count: 12 },
        { name: 'Cloud Solutions', count: 8 },
        { name: 'AI & ML', count: 5 },
        { name: 'Consulting', count: 2 }
      ],
      recentActivity: [
        { action: 'New project started', date: new Date(), client: 'Tech Corp' },
        { action: 'Project completed', date: new Date(Date.now() - 86400000), client: 'StartupXYZ' }
      ]
    };

    res.json({
      success: true,
      data: mockAnalytics
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics',
      error: error.message
    });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

// GET /api/blog - Get all blog posts
router.get('/', async (req, res) => {
  try {
    const mockPosts = [
      {
        id: 1,
        title: 'The Future of Web Development in 2024',
        slug: 'future-web-development-2024',
        excerpt: 'Exploring the latest trends and technologies shaping web development.',
        content: 'Full blog post content here...',
        author: 'TechSolutions Team',
        publishedAt: new Date('2024-01-15'),
        tags: ['web-development', 'trends', 'technology']
      }
    ];

    res.json({
      success: true,
      data: mockPosts,
      count: mockPosts.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog posts',
      error: error.message
    });
  }
});

module.exports = router;

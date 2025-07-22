const express = require('express');
const router = express.Router();

// GET /api/testimonials - Get all testimonials
router.get('/', async (req, res) => {
  try {
    // Mock testimonials data for now
    const testimonials = [
      {
        id: 1,
        name: 'John Smith',
        company: 'Tech Innovations Inc.',
        position: 'CTO',
        content: 'TechSolutions Pro delivered exceptional results for our web development project. Their expertise and professionalism are unmatched.',
        rating: 5,
        image: '/images/testimonials/john-smith.jpg',
        createdAt: new Date('2024-01-15')
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        company: 'StartupXYZ',
        position: 'CEO',
        content: 'The mobile app they developed for us exceeded our expectations. Great communication throughout the project.',
        rating: 5,
        image: '/images/testimonials/sarah-johnson.jpg',
        createdAt: new Date('2024-02-20')
      },
      {
        id: 3,
        name: 'Michael Chen',
        company: 'Digital Solutions Ltd.',
        position: 'Product Manager',
        content: 'Their cloud migration services helped us scale efficiently. Highly recommend their expertise.',
        rating: 5,
        image: '/images/testimonials/michael-chen.jpg',
        createdAt: new Date('2024-03-10')
      }
    ];

    res.json({
      success: true,
      data: testimonials,
      count: testimonials.length
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch testimonials',
      error: error.message
    });
  }
});

// POST /api/testimonials - Create new testimonial (admin only)
router.post('/', async (req, res) => {
  try {
    const { name, company, position, content, rating, image } = req.body;

    // Validation
    if (!name || !company || !content || !rating) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, company, content, rating'
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5'
      });
    }

    // Mock creation - in real app, save to database
    const newTestimonial = {
      id: Date.now(),
      name,
      company,
      position: position || '',
      content,
      rating,
      image: image || '/images/testimonials/default.jpg',
      createdAt: new Date()
    };

    res.status(201).json({
      success: true,
      message: 'Testimonial created successfully',
      data: newTestimonial
    });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create testimonial',
      error: error.message
    });
  }
});

// GET /api/testimonials/:id - Get specific testimonial
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock data - in real app, fetch from database
    const testimonial = {
      id: parseInt(id),
      name: 'John Smith',
      company: 'Tech Innovations Inc.',
      position: 'CTO',
      content: 'TechSolutions Pro delivered exceptional results for our web development project.',
      rating: 5,
      image: '/images/testimonials/john-smith.jpg',
      createdAt: new Date('2024-01-15')
    };

    res.json({
      success: true,
      data: testimonial
    });
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch testimonial',
      error: error.message
    });
  }
});

module.exports = router;

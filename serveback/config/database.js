// Database configuration for PostgreSQL
const { Pool } = require('pg');
require('dotenv').config();

const DATABASE_CONFIG = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
};

// Create connection pool
const pool = new Pool(DATABASE_CONFIG);

// Database connection test
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Database connected successfully');
    client.release();
  } catch (err) {
    console.error('❌ Database connection failed:', err);
  }
};

// Database queries
const DatabaseQueries = {
  // Contact form submissions
  CREATE_CONTACT: `
    INSERT INTO contacts (name, email, company, service, message, created_at)
    VALUES ($1, $2, $3, $4, $5, NOW())
    RETURNING id;
  `,

  GET_CONTACTS: `
    SELECT * FROM contacts ORDER BY created_at DESC;
  `,

  // Services management
  GET_SERVICES: `
    SELECT * FROM services WHERE active = true ORDER BY display_order;
  `,

  CREATE_SERVICE: `
    INSERT INTO services (name, description, features, price_range, active, display_order)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id;
  `,

  // Project inquiries
  CREATE_PROJECT_INQUIRY: `
    INSERT INTO project_inquiries (
      client_name, client_email, project_type, budget_range, 
      timeline, description, status, created_at
    )
    VALUES ($1, $2, $3, $4, $5, $6, 'new', NOW())
    RETURNING id;
  `,

  GET_PROJECT_INQUIRIES: `
    SELECT * FROM project_inquiries 
    ORDER BY created_at DESC;
  `,

  // Testimonials
  GET_TESTIMONIALS: `
    SELECT * FROM testimonials WHERE approved = true ORDER BY created_at DESC;
  `,

  CREATE_TESTIMONIAL: `
    INSERT INTO testimonials (client_name, company, service_type, rating, comment, approved)
    VALUES ($1, $2, $3, $4, $5, false)
    RETURNING id;
  `,

  // Newsletter subscriptions
  CREATE_NEWSLETTER_SUBSCRIPTION: `
    INSERT INTO newsletter_subscriptions (email, subscribed_at, active)
    VALUES ($1, NOW(), true)
    ON CONFLICT (email) DO UPDATE SET active = true
    RETURNING id;
  `,

  // Blog posts
  GET_BLOG_POSTS: `
    SELECT id, title, excerpt, author, published_at, slug, featured_image
    FROM blog_posts 
    WHERE published = true 
    ORDER BY published_at DESC;
  `,

  GET_BLOG_POST: `
    SELECT * FROM blog_posts WHERE slug = $1 AND published = true;
  `,

  // Analytics
  CREATE_ANALYTICS_EVENT: `
    INSERT INTO analytics_events (event_type, page, user_agent, ip_address, created_at)
    VALUES ($1, $2, $3, $4, NOW());
  `,

  // Portfolio/Case studies
  GET_PORTFOLIO: `
    SELECT * FROM portfolio_items WHERE published = true ORDER BY display_order;
  `,

  // Quote requests
  CREATE_QUOTE_REQUEST: `
    INSERT INTO quote_requests (
      client_name, client_email, service_type, project_scope,
      budget_range, timeline, requirements, status, created_at
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending', NOW())
    RETURNING id;
  `
};

module.exports = {
  pool,
  testConnection,
  DatabaseQueries
};

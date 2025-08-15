// Database service for PostgreSQL integration
// This would typically be in your backend, but here's the structure

const DATABASE_CONFIG = {
  connectionString: process.env.VITE_DATABASE_URL || 'postgresql://neondb_owner:npg_dqgGyi49SCMm@ep-solitary-mountain-a8emgw3p-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: {
    rejectUnauthorized: false
  }
};

// Database queries that your backend should implement
export const DatabaseQueries = {
  // Contact form submissions
  CREATE_CONTACT: `
    INSERT INTO contacts (name, email, company, service, message, created_at)
    VALUES ($1, $2, $3, $4, $5, NOW())
    RETURNING id;
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

// Database schema creation scripts
export const DatabaseSchema = {
  CONTACTS_TABLE: `
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      service VARCHAR(100),
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      responded BOOLEAN DEFAULT FALSE
    );
  `,

  SERVICES_TABLE: `
    CREATE TABLE IF NOT EXISTS services (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      features JSONB,
      price_range VARCHAR(100),
      active BOOLEAN DEFAULT TRUE,
      display_order INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `,

  PROJECT_INQUIRIES_TABLE: `
    CREATE TABLE IF NOT EXISTS project_inquiries (
      id SERIAL PRIMARY KEY,
      client_name VARCHAR(255) NOT NULL,
      client_email VARCHAR(255) NOT NULL,
      project_type VARCHAR(100),
      budget_range VARCHAR(100),
      timeline VARCHAR(100),
      description TEXT,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMP DEFAULT NOW()
    );
  `,

  TESTIMONIALS_TABLE: `
    CREATE TABLE IF NOT EXISTS testimonials (
      id SERIAL PRIMARY KEY,
      client_name VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      service_type VARCHAR(100),
      rating INTEGER CHECK (rating >= 1 AND rating <= 5),
      comment TEXT,
      approved BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `,

  NEWSLETTER_TABLE: `
    CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      subscribed_at TIMESTAMP DEFAULT NOW(),
      active BOOLEAN DEFAULT TRUE
    );
  `,

  BLOG_POSTS_TABLE: `
    CREATE TABLE IF NOT EXISTS blog_posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      excerpt TEXT,
      content TEXT,
      author VARCHAR(255),
      featured_image VARCHAR(500),
      published BOOLEAN DEFAULT FALSE,
      published_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `,

  ANALYTICS_TABLE: `
    CREATE TABLE IF NOT EXISTS analytics_events (
      id SERIAL PRIMARY KEY,
      event_type VARCHAR(100),
      page VARCHAR(255),
      user_agent TEXT,
      ip_address INET,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `,

  PORTFOLIO_TABLE: `
    CREATE TABLE IF NOT EXISTS portfolio_items (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      technologies JSONB,
      client_name VARCHAR(255),
      project_url VARCHAR(500),
      image_url VARCHAR(500),
      published BOOLEAN DEFAULT FALSE,
      display_order INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `,

  QUOTE_REQUESTS_TABLE: `
    CREATE TABLE IF NOT EXISTS quote_requests (
      id SERIAL PRIMARY KEY,
      client_name VARCHAR(255) NOT NULL,
      client_email VARCHAR(255) NOT NULL,
      service_type VARCHAR(100),
      project_scope TEXT,
      budget_range VARCHAR(100),
      timeline VARCHAR(100),
      requirements TEXT,
      status VARCHAR(50) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT NOW()
    );
  `
};

export default {
  DATABASE_CONFIG,
  DatabaseQueries,
  DatabaseSchema
};

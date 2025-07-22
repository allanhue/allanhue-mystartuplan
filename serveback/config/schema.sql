-- Database schema for TechSolutions Pro startup website
-- PostgreSQL database tables

-- Contacts table for contact form submissions
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

-- Services table for managing service offerings
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

-- Project inquiries table
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

-- Testimonials table
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

-- Newsletter subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW(),
  active BOOLEAN DEFAULT TRUE
);

-- Blog posts table
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

-- Analytics events table
CREATE TABLE IF NOT EXISTS analytics_events (
  id SERIAL PRIMARY KEY,
  event_type VARCHAR(100),
  page VARCHAR(255),
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Portfolio items table
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

-- Quote requests table
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

-- Insert default services
INSERT INTO services (name, description, features, price_range, active, display_order) VALUES
('Data Science & Analytics', 'Transform your raw data into actionable insights', 
 '["Predictive Analytics", "Machine Learning", "Data Visualization", "Statistical Analysis"]', 
 '$2,000 - $10,000', true, 1),
('Software Development', 'Custom web and mobile applications', 
 '["Web Applications", "Mobile Apps", "API Development", "Database Design"]', 
 '$3,000 - $15,000', true, 2),
('Zoho & Odoo Implementation', 'Business process automation and ERP solutions', 
 '["CRM Setup", "Workflow Automation", "Third-party Integrations", "Training"]', 
 '$1,500 - $8,000', true, 3),
('IT Management & Infrastructure', 'Complete IT infrastructure management', 
 '["DNS Management", "SSL Certificates", "Server Setup", "Cloud Infrastructure"]', 
 '$1,000 - $5,000', true, 4)
ON CONFLICT DO NOTHING;

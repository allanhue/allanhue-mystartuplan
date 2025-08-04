import { backendApiUrl } from '../firebase';

// API service for connecting to Render backend
const API_BASE_URL = 'https://mystartuplan-back.onrender.com';

class ApiService {
  constructor() {
    this.baseURL = backendApiUrl;
  }

  // Generic API call method
  async apiCall(endpoint, options = {}, token = null) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const config = {
      headers,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  }

  // Contact form submission
  async submitContactForm(formData, token = null) {
    const dataToSend = {
      ...formData,
      to: 'centralhype9@gmail.com',  // Add recipient email
      subject: `New Contact from ${formData.name} - ${formData.company || 'No Company'}`
    };
    
    return this.apiCall('/api/contact', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
    }, token);
  }

  // Get services data
  async getServices(token = null) {
    return this.apiCall('/api/services', {}, token);
  }

  // Submit project inquiry
  async submitProjectInquiry(projectData) {
    return this.apiCall('/api/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  // Get testimonials
  async getTestimonials() {
    return this.apiCall('/api/testimonials');
  }

  // Submit newsletter subscription
  async subscribeNewsletter(email) {
    return this.apiCall('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Get blog posts
  async getBlogPosts() {
    return this.apiCall('/api/blog');
  }

  // Get specific blog post
  async getBlogPost(id) {
    return this.apiCall(`/api/blog/${id}`);
  }

  // Analytics tracking
  async trackEvent(eventData) {
    return this.apiCall('/api/analytics', {
      method: 'POST',
      body: JSON.stringify(eventData),
    });
  }

  // Get portfolio/case studies
  async getPortfolio() {
    return this.apiCall('/api/portfolio');
  }

  // Submit quote request
  async requestQuote(quoteData) {
    return this.apiCall('/api/quote', {
      method: 'POST',
      body: JSON.stringify(quoteData),
    });
  }

  // Health check for backend API connection
  async testBackendConnection() {
    try {
      const response = await fetch(`${this.baseURL}/health`);
      if (!response.ok) throw new Error('Backend health check failed');
      return await response.json();
    } catch (error) {
      console.error('Backend connection test failed:', error);
      throw error;
    }
  }
}

export default new ApiService();

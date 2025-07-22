// API service for connecting to Render backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://mystartuplan.onrender.com';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic API call method
  async apiCall(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
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
  async submitContactForm(formData) {
    return this.apiCall('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Get services data
  async getServices() {
    return this.apiCall('/api/services');
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
}

export default new ApiService();

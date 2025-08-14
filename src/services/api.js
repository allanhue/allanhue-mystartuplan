import { backendApiUrl } from '../superbaseClient';

// API service for connecting to mystartuplan_back backend
// Update the default fallback to your backend's deployed URL if needed
const API_BASE_URL = backendApiUrl || 'https://mystartuplan-back.onrender.com';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
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
      to: 'centralhype9@gmail.com',
      subject: `New Contact from ${formData.name} - ${formData.company || 'No Company'}`
    };
    try {
      return await this.apiCall('/api/lanstartup/contact', {
        method: 'POST',
        body: JSON.stringify(dataToSend),
      }, token);
    } catch (error) {
      throw new Error(
        "Sorry, there was an error sending your message. Please try again or email us directly at allanmwangi329@gmail.com"
      );
    }
  }

  // Get services data
  async getServices(token = null) {
    return this.apiCall('/api/lanstartup/services', {}, token);
  }

  // Submit project inquiry
  async submitProjectInquiry(projectData) {
    return this.apiCall('/api/lanstartup/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  // Get testimonials
  async getTestimonials() {
    return this.apiCall('/api/lanstartup/testimonials');
  }

  // Submit newsletter subscription
  async subscribeNewsletter(email) {
    return this.apiCall('/api/lanstartup/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Get blog posts
  async getBlogPosts() {
    return this.apiCall('/api/lanstartup/blog');
  }

  // Get specific blog post
  async getBlogPost(id) {
    return this.apiCall(`/api/lanstartup/blog/${id}`);
  }

  // Analytics tracking
  async trackEvent(eventData) {
    return this.apiCall('/api/lanstartup/analytics/dashboard', {
      method: 'GET',
    });
  }

  // Get portfolio/case studies
  async getPortfolio() {
    return this.apiCall('/api/lanstartup/portfolio');
  }

  // Submit quote request
  async requestQuote(quoteData) {
    return this.apiCall('/api/lanstartup/quote', {
      method: 'POST',
      body: JSON.stringify(quoteData),
    });
  }


  }


export default new ApiService();

// Minimal stub API used by frontend while backend/Supabase aren't integrated yet.

const sampleServices = [
  { id: 'svc-1', name: 'IT Support', description: 'Professional IT support services', icon: '💻', price: 99.99 },
  { id: 'svc-2', name: 'Network Setup', description: 'Complete network infrastructure', icon: '🌐', price: 149.99 },
  { id: 'svc-3', name: 'Data Recovery', description: 'Expert data recovery services', icon: '💾', price: 199.99 },
  { id: 'svc-4', name: 'LightWeight IT', description: 'Security & monitoring', icon: '🔒', price: 89.99 },
];

class ApiServiceStub {
  async getServices() {
    return Promise.resolve({ services: sampleServices });
  }

  async submitContactForm(formData) {
    // pretend to succeed
    return Promise.resolve({ success: true, message: 'Contact submitted (stub)' });
  }

  async submitProjectInquiry(projectData) {
    return Promise.resolve({ success: true });
  }

  // other methods can be added as lightweight stubs
  async getTestimonials() { return Promise.resolve({ testimonials: [] }); }
  async getBlogPosts() { return Promise.resolve({ posts: [] }); }
  async subscribeNewsletter(email) { return Promise.resolve({ success: true }); }
}

export default new ApiServiceStub();

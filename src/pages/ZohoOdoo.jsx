import { Link } from 'react-router-dom'

const ZohoOdoo = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">⚙️</div>
          <h1 className="text-5xl font-bold mb-6 text-black">Zoho & Odoo Implementation</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Streamline your business operations with expert implementation and customization of Zoho and Odoo business management platforms
          </p>
        </div>

        {/* Platform Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Zoho */}
          <div className="bg-white border-2 border-black rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🔵</div>
              <h2 className="text-3xl font-bold text-black">Zoho Suite</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-black">Core Applications</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Zoho CRM - Customer relationship management</li>
                  <li>• Zoho Books - Accounting and finance</li>
                  <li>• Zoho Inventory - Stock management</li>
                  <li>• Zoho Projects - Project management</li>
                  <li>• Zoho Desk - Customer support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-black">Best For</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Small to medium businesses</li>
                  <li>• Cloud-first organizations</li>
                  <li>• Businesses needing quick deployment</li>
                  <li>• Cost-conscious companies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Odoo */}
          <div className="bg-white border-2 border-black rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🟣</div>
              <h2 className="text-3xl font-bold text-black">Odoo ERP</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-black">Core Modules</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Sales & CRM - Lead to cash process</li>
                  <li>• Accounting - Financial management</li>
                  <li>• Inventory - Warehouse management</li>
                  <li>• Manufacturing - Production planning</li>
                  <li>• HR - Human resources management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-black">Best For</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Growing businesses</li>
                  <li>• Manufacturing companies</li>
                  <li>• Complex business processes</li>
                  <li>• Highly customizable needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Implementation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2 text-black">Setup & Configuration</h3>
              <p className="text-gray-600 text-sm">Complete system setup, user configuration, and initial data migration</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-bold mb-2 text-black">Customization</h3>
              <p className="text-gray-600 text-sm">Custom modules, workflows, and business logic tailored to your needs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-lg font-bold mb-2 text-black">Integration</h3>
              <p className="text-gray-600 text-sm">Connect with existing systems, APIs, and third-party applications</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-bold mb-2 text-black">Training & Support</h3>
              <p className="text-gray-600 text-sm">User training, documentation, and ongoing technical support</p>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Implementation Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Analysis</h3>
              <p className="text-gray-600 text-sm">Business process analysis and requirements gathering</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Planning</h3>
              <p className="text-gray-600 text-sm">System architecture and implementation roadmap</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Setup</h3>
              <p className="text-gray-600 text-sm">System configuration and customization</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Testing</h3>
              <p className="text-gray-600 text-sm">User acceptance testing and system validation</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Go-Live</h3>
              <p className="text-gray-600 text-sm">System deployment and user training</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Benefits of Professional Implementation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Faster ROI</h3>
              <p className="text-gray-600">Quick implementation means faster time to value and return on investment</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Best Practices</h3>
              <p className="text-gray-600">Leverage industry best practices and proven implementation methodologies</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Risk Mitigation</h3>
              <p className="text-gray-600">Reduce implementation risks with expert guidance and proven processes</p>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="bg-black text-white rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🏭</div>
              <span className="font-semibold">Manufacturing</span>
            </div>
            <div>
              <div className="text-3xl mb-2">🛒</div>
              <span className="font-semibold">Retail & E-commerce</span>
            </div>
            <div>
              <div className="text-3xl mb-2">🏥</div>
              <span className="font-semibold">Healthcare</span>
            </div>
            <div>
              <div className="text-3xl mb-2">🏗️</div>
              <span className="font-semibold">Construction</span>
            </div>
            <div>
              <div className="text-3xl mb-2">📚</div>
              <span className="font-semibold">Education</span>
            </div>
            <div>
              <div className="text-3xl mb-2">🍽️</div>
              <span className="font-semibold">Food & Beverage</span>
            </div>
            <div>
              <div className="text-3xl mb-2">💼</div>
              <span className="font-semibold">Professional Services</span>
            </div>
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <span className="font-semibold">Logistics</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Transform Your Business Operations?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss which platform is right for your business and create an implementation plan
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors inline-block text-lg"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-colors inline-block text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZohoOdoo

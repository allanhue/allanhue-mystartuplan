import { useLocation, Link } from 'react-router-dom';
import PaymentComponent from '../services/payment';

// simple helper to read query params
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PaymentPage = () => {
  const query = useQuery();
  const service = query.get('service') || 'LanStartup Service';
  const amountParam = query.get('amount');
  const amount = amountParam ? parseFloat(amountParam) : 99.99;
  const description = query.get('description') || `${service} purchase`;

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Purchase — {service}</h1>
          <p className="text-gray-600">You're purchasing: <strong>{service}</strong> — Amount: <strong>${amount}</strong></p>
          <div className="mt-4">
            <Link to="/services" className="text-sm text-primary-600 hover:underline">← Back to services</Link>
          </div>
        </div>

        {/* Render the PaymentComponent from services/payment.jsx */}
        <PaymentComponent 
          amount={amount} 
          title={service}
          description={description}
          onPaymentSuccess={() => {
            // minimal success handler — could redirect or show a message
            // For now, PaymentComponent already shows success state
          }}
        />
      </div>
    </div>
  );
};

export default PaymentPage;

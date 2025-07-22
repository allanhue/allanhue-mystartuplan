import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { UserAuth } from '../context/AuthContext';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Payment form component
const PaymentForm = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = UserAuth();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create payment intent when component mounts
    const createPaymentIntent = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/payment/create-payment-intent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount,
            metadata: {
              userId: user?.uid || 'anonymous',
              service: 'LanStartup Service'
            }
          }),
        });

        const data = await response.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError('Failed to initialize payment');
        }
      } catch (err) {
        setError('Failed to initialize payment');
        console.error('Payment intent error:', err);
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    }
  }, [amount, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setProcessing(true);
    setError(null);

    const card = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || '',
        },
      }
    });

    if (error) {
      setError(error.message);
      onError && onError(error);
    } else {
      console.log('Payment succeeded:', paymentIntent);
      onSuccess && onSuccess(paymentIntent);
    }

    setProcessing(false);
  };

  const cardStyle = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="card-element-container">
        <CardElement options={cardStyle} />
      </div>
      
      {error && (
        <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </div>
      )}
      
      <button
        type="submit"
        disabled={!stripe || processing || !clientSecret}
        className="pay-button"
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          backgroundColor: processing ? '#ccc' : '#5469d4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: processing ? 'not-allowed' : 'pointer'
        }}
      >
        {processing ? 'Processing...' : `Pay $${amount}`}
      </button>
    </form>
  );
};

// Main payment component
const PaymentComponent = ({ 
  amount = 99.99, 
  title = "LanStartup Service",
  description = "Premium service package",
  onPaymentSuccess,
  onPaymentError 
}) => {
  const { user } = UserAuth();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePaymentSuccess = (paymentIntent) => {
    setPaymentStatus('succeeded');
    onPaymentSuccess && onPaymentSuccess(paymentIntent);
  };

  const handlePaymentError = (error) => {
    setPaymentStatus('failed');
    onPaymentError && onPaymentError(error);
  };

  if (!user) {
    return (
      <div className="payment-container" style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Please sign in to make a payment</h3>
        <p>You need to be logged in to process payments.</p>
      </div>
    );
  }

  if (paymentStatus === 'succeeded') {
    return (
      <div className="payment-success" style={{ padding: '20px', textAlign: 'center' }}>
        <h3 style={{ color: 'green' }}>✅ Payment Successful!</h3>
        <p>Thank you for your payment. You will receive a confirmation email shortly.</p>
      </div>
    );
  }

  return (
    <div className="payment-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <div className="payment-header" style={{ marginBottom: '20px' }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="amount" style={{ fontSize: '24px', fontWeight: 'bold', color: '#5469d4' }}>
          ${amount}
        </div>
      </div>
      
      <Elements stripe={stripePromise}>
        <PaymentForm 
          amount={amount}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />
      </Elements>
      
      {paymentStatus === 'failed' && (
        <div className="payment-error" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fee', border: '1px solid #fcc', borderRadius: '4px' }}>
          <p style={{ color: 'red', margin: 0 }}>Payment failed. Please try again.</p>
        </div>
      )}
    </div>
  );
};

// Payment history component
export const PaymentHistory = () => {
  const { user } = UserAuth();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      if (!user) return;
      
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/payment/history?userId=${user.uid}`,
          {
            headers: {
              'Authorization': `Bearer ${await user.getIdToken()}`
            }
          }
        );
        const data = await response.json();
        setPayments(data.payments || []);
      } catch (error) {
        console.error('Failed to fetch payment history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, [user]);

  if (!user) {
    return <div>Please sign in to view payment history.</div>;
  }

  if (loading) {
    return <div>Loading payment history...</div>;
  }

  return (
    <div className="payment-history">
      <h3>Payment History</h3>
      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <div className="payments-list">
          {payments.map((payment) => (
            <div key={payment.id} className="payment-item" style={{ 
              border: '1px solid #ddd', 
              padding: '10px', 
              margin: '10px 0', 
              borderRadius: '4px' 
            }}>
              <div><strong>Amount:</strong> ${payment.amount}</div>
              <div><strong>Status:</strong> {payment.status}</div>
              <div><strong>Date:</strong> {new Date(payment.created).toLocaleDateString()}</div>
              <div><strong>Description:</strong> {payment.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentComponent;
import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';

// Use relative API endpoints so frontend does not import any Supabase helpers
const PaymentComponent = ({
  amount = 99.99,
  title = 'LanStartup Service',
  description = 'Premium service package',
  onPaymentSuccess,
  onPaymentError,
}) => {
  const { user } = UserAuth();
  const [status, setStatus] = useState('idle'); // idle | creating | ready | error | succeeded
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const createPaymentIntent = async () => {
      if (!amount || amount <= 0) return;
      setStatus('creating');
      setError(null);

      try {
        const resp = await fetch(`/api/payment/create-payment-intent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount,
            currency: 'usd',
            metadata: {
              userId: user?.uid || user?.id || 'anonymous',
              email: user?.email || '',
              service: title,
            },
          }),
        });

        const data = await resp.json();
        if (!resp.ok) throw new Error(data?.error || 'Failed to create payment intent');

        setClientSecret(data.clientSecret || null);
        setStatus('ready');
      } catch (err) {
        console.error('Create payment intent failed:', err);
        setError(err.message || 'Failed to initialize payment');
        setStatus('error');
      }
    };

    createPaymentIntent();
  }, [amount, title, user]);

  // If you want full browser payment card entry, install:
  // npm install @stripe/stripe-js @stripe/react-stripe-js
  // then replace this component with a Stripe Elements based implementation.
  const installHint = (
    <div className="mt-4 p-4 rounded border border-yellow-300 bg-yellow-50 text-yellow-800">
      <strong>Developer note:</strong> Browser card entry (Stripe Elements) is not enabled.
      To enable it, install the Stripe client libraries:
      <pre className="mt-2 p-2 bg-white rounded text-sm">npm install @stripe/stripe-js @stripe/react-stripe-js</pre>
      After installing, you can switch to a client-side Elements flow and use the <code>clientSecret</code> returned by the backend.
    </div>
  );

  return (
    <div className="payment-wrapper max-w-xl mx-auto">
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="mb-4">
          <div className="text-lg font-bold">${amount}</div>
        </div>

        {status === 'creating' && (
          <div className="text-gray-600">Initializing payment...</div>
        )}

        {status === 'error' && (
          <div className="text-red-600 mb-4">Error: {error}</div>
        )}

        {status === 'ready' && clientSecret && (
          <>
            <div className="mb-4 p-3 bg-gray-50 border rounded text-sm">
              <div><strong>Payment intent created.</strong></div>
              <div className="mt-1 text-xs text-gray-600">clientSecret (truncated): <code>{String(clientSecret).slice(0, 12)}…</code></div>
              <div className="mt-2 text-xs text-gray-500">
                To complete the payment in the browser you must implement Stripe Elements (client libraries).
              </div>
            </div>

            {installHint}

            <div className="mt-4">
              <button
                type="button"
                onClick={() => {
                  // Developer hook: you could implement confirm flow here after adding Stripe client libs
                  alert('Client payment intent available. Integrate Stripe Elements to complete payment in-browser.');
                }}
                className="px-4 py-2 bg-black text-white rounded"
              >
                Complete payment (requires Stripe client libs)
              </button>
            </div>
          </>
        )}

        {status === 'ready' && !clientSecret && (
          <div className="text-gray-600">Payment intent created but no clientSecret returned.</div>
        )}

        {status === 'idle' && (
          <div className="text-gray-600">No payment required.</div>
        )}
      </div>
    </div>
  );
};

// Payment history component (uses backend history endpoint)
export const PaymentHistory = () => {
  const { user } = UserAuth();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const resp = await fetch(`/api/payment/history?userId=${encodeURIComponent(user.uid || user.id)}`);
        const data = await resp.json();
        if (!resp.ok) throw new Error(data?.error || 'Failed to fetch history');
        setPayments(data.payments || []);
      } catch (err) {
        console.error('Fetch payment history failed:', err);
        setError(err.message || 'Failed to fetch payment history');
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [user]);

  if (!user) return <div className="text-sm text-gray-600">Sign in to view your payment history.</div>;
  if (loading) return <div>Loading payment history...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  if (payments.length === 0) return <div>No payments found.</div>;

  return (
    <div className="payment-history space-y-3">
      {payments.map((p) => (
        <div key={p.id} className="p-3 border rounded bg-white">
          <div><strong>Amount:</strong> ${p.amount}</div>
          <div><strong>Status:</strong> {p.status}</div>
          <div><strong>Date:</strong> {new Date(p.created).toLocaleString()}</div>
          <div><strong>Description:</strong> {p.description}</div>
        </div>
      ))}
    </div>
  );
};

export default PaymentComponent;
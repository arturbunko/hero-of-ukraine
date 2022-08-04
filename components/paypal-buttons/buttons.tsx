import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useCallback, useEffect } from 'react';

export const Buttons = ({
  isActive,
  purchaseName,
  email,
  locale,
  handleSuccess,
  handleError,
}: {
  isActive: boolean;
  email: string;
  purchaseName: string;
  locale: 'uk' | 'en';
  handleSuccess: () => void;
  handleError: () => void;
}) => {
  const [{ options, isResolved }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
      },
    });
  }, [purchaseName, email]);

  const createOrder = async () => {
    console.log('createOrder');

    const response = await fetch('/hero-of-ukraine/next-api/payment/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        purchase_name: purchaseName,
        email,
        locale,
      }),
    });

    const data = await response.json();
    const { id } = data;

    return id;
  };

  const verifyPayment = async (data: Record<string, unknown>) => {
    const response = await fetch('/hero-of-ukraine/next-api/payment/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        purchase_name: purchaseName,
        order_id: data.orderID,
      }),
    });

    if (!response.ok) {
      return handleError();
    }

    return handleSuccess();
  };

  return (
    <div className="lg:mt-8 mt-4" style={{ minHeight: '180px' }}>
      {isResolved ? (
        <PayPalButtons
          disabled={!isActive}
          createOrder={createOrder}
          onApprove={verifyPayment}
          onError={handleError}
          style={{
            color: 'white',
            shape: 'rect',
            height: 55,
            tagline: false,
          }}
        />
      ) : (
        <div className="animate-pulse">
          <div className="bg-[#e3e3e3] h-[55px] mb-[17px]" />
          <div className="bg-[#e3e3e3] h-[55px] mb-[17px]" />
        </div>
      )}
    </div>
  );
};

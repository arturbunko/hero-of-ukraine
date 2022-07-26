import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

export const Buttons = ({ isActive }: { isActive: boolean }) => {
  const [{ isResolved }] = usePayPalScriptReducer();
  return (
    <div className="lg:mt-8 mt-4" style={{ minHeight: '180px' }}>
      {isResolved ? (
        <PayPalButtons
          disabled={!isActive}
          createSubscription={async () => ''}
          createOrder={async () => ''}
          onApprove={async () => {}}
          style={{
            color: 'white',
            shape: 'rect',
            height: 55,
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

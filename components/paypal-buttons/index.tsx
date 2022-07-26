import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Buttons } from './buttons';

export const PayPalButtons = ({ isActive }: { isActive: boolean }) => {
  console.log(process.env.NEXT_PUBLIC_P_ID);

  return (
    <PayPalScriptProvider
      options={{
        'client-id': process.env.NEXT_PUBLIC_P_ID as string,
      }}
    >
      <Buttons isActive={isActive} />
    </PayPalScriptProvider>
  );
};

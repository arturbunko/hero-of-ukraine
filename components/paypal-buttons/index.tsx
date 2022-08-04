import { Buttons } from './buttons';

export const PayPalButtons = (props: {
  isActive: boolean;
  email: string;
  purchaseName: string;
  locale: 'uk' | 'en';
  handleSuccess: () => void;
  handleError: () => void;
}) => {
  return <Buttons {...props} />;
};

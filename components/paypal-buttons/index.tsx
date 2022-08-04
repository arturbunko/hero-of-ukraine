import { Buttons } from './buttons';

export const PayPalButtons = (props: {
  isActive: boolean;
  email: string;
  emailIsValid: boolean;
  purchaseName: string;
  locale: 'uk' | 'en';
  handleSuccess: () => void;
  handleError: () => void;
}) => {
  return <Buttons {...props} />;
};

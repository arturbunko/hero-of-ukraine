import Lottie from 'react-lottie';
import * as animation from '../../public/45792-rotate-phone.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const RotationAnimation = () => {
  return <Lottie options={defaultOptions} height={400} width={320} />;
};

export default RotationAnimation;

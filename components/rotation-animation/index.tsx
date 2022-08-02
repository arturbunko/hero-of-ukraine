import dynamic from 'next/dynamic';

const RotationAnimation = dynamic(() => import('./rotation-animation'), { ssr: false });

export default RotationAnimation;

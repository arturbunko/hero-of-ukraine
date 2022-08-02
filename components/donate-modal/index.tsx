import dynamic from 'next/dynamic';

const DonateModal = dynamic(() => import('./donate-modal'), { ssr: false });

export default DonateModal;

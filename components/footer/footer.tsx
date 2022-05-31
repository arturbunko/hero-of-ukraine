import { Facebook } from '../facebook/facebook';
import { Instagram } from '../instagram/instagram';

export const Footer = () => {
  return (
    <footer id="contact" className="flex items-center justify-between mb-10 lg:mt-36 mt-14">
      <div className="text-white-60 max-w-[260px]">
        <a
          className="underline cursor-pointer"
          href="https://legal.myplantin.com/vortemol/terms_and_conditions.html"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Service{' '}
        </a>{' '}
        ·{' '}
        <a
          className="underline cursor-pointer"
          href="https://legal.myplantin.com/vortemol/privacy_policy.html"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>{' '}
        ·{' '}
        <a
          className="underline cursor-pointer"
          href="https://legal.myplantin.com/vortemol/account.html"
          target="_blank"
          rel="noreferrer"
        >
          Subscription Policy
        </a>{' '}
        · <span>PlantIn© 2022. </span>
        <span>All rights reserved</span>
      </div>
      <div className="flex gap-6">
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/plantinapp/">
          <Facebook />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/plantin.app/">
          <Instagram />
        </a>
      </div>
    </footer>
  );
};

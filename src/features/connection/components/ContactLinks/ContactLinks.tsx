import React from 'react';
import { FaGithub, FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import type { RevealLinkProps } from './types';

const RevealLink: React.FC<RevealLinkProps> = ({ icon: Icon, value, href }) => {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 bg-white/5 hover:bg-primary hover:text-white text-gray-300 px-4 py-3 rounded-xl transition-all duration-300 border border-white/5 hover:border-primary w-full md:w-auto cursor-pointer"
    >
      <Icon className="text-xl shrink-0" />
      <span className="font-mono text-sm">
        {value}
      </span>
    </a>
  );
};

export const ContactLinks: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <RevealLink
        icon={FaEnvelope}
        value="trongdn2405@gmail.com"
        label="Email"
        href="mailto:trongdn2405@gmail.com"
      />
      <RevealLink
        icon={FaPhoneAlt}
        value="0357407264"
        label="Phone"
        href="tel:+84357407264"
      />
      <RevealLink
        icon={FaGithub}
        value="github.com/trongdoan"
        label="GitHub"
        href="#"
      />
      <RevealLink
        icon={FaFacebookF}
        value="fb.com/trongdoan"
        label="Facebook"
        href="#"
      />
    </div>
  );
};

export default ContactLinks;

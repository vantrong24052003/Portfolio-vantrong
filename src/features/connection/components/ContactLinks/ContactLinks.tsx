import React from 'react';
import { FaGithub, FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import type { RevealLinkProps } from './types';

const RevealLink: React.FC<RevealLinkProps> = ({ icon: Icon, value, href }) => {
  return (
    <a
      href={href}
      className="group flex items-center justify-center bg-white/5 hover:bg-primary hover:text-white text-gray-300 p-3 rounded-xl transition-all duration-300 border border-white/5 hover:border-primary w-full md:w-auto overflow-hidden relative cursor-pointer"
    >
      <Icon className="text-xl w-6 shrink-0" />
      <span className="max-w-0 opacity-0 group-hover:max-w-[300px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-in-out font-mono text-sm whitespace-nowrap">
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
        value="contact@trongdoan.dev"
        label="Email"
        href="mailto:contact@trongdoan.dev"
      />
      <RevealLink
        icon={FaPhoneAlt}
        value="(+84) 999 999 999"
        label="Phone"
        href="tel:+84999999999"
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

import React from 'react';
import { FaGithub, FaFacebookF, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import type { RevealLinkProps } from './types';

const RevealLink: React.FC<RevealLinkProps> = ({ icon: Icon, value, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground text-muted-foreground px-4 py-3 rounded-xl transition-all duration-300 border border-border hover:border-primary w-full md:w-auto cursor-pointer"
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
        value="vantrong2405"
        label="GitHub"
        href="https://github.com/vantrong2405"
      />
      <RevealLink
        icon={FaFacebookF}
        value="doanvo.vantrong"
        label="Facebook"
        href="https://www.facebook.com/doanvo.vantrong"
      />
      <RevealLink
        icon={FaInstagram}
        value="trongvan2405"
        label="Instagram"
        href="https://www.instagram.com/trongvan2405/"
      />
    </div>
  );
};

export default ContactLinks;

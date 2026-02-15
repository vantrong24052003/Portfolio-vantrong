import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import { Check } from 'lucide-react';

const languages = [
  { id: 'en', name: 'English', label: 'EN' },
  { id: 'vi', name: 'Tiếng Việt', label: 'VI' },
];

const cn = (...inputs: unknown[]) => inputs.filter(Boolean).join(' ');

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-card/80 backdrop-blur-md border border-border rounded-full hover:border-primary/50 transition-all duration-300 group flex items-center gap-2 cursor-pointer"
        title={i18n.t('common.language.title')}
      >
        <MdLanguage className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
          {i18n.language.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[60]"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-full left-0 mb-4 z-[70] min-w-[150px] bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-2 animate-fade-in">
            <div className="flex flex-col gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer group",
                    i18n.language === lang.id ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="text-sm font-medium">{i18n.t(`common.languages.${lang.id}`)}</span>
                  {i18n.language === lang.id && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

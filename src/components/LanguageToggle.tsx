import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: 'en' | 'te';
  onLanguageChange: (lang: 'en' | 'te') => void;
}

export const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="default"
      onClick={() => onLanguageChange(language === 'en' ? 'te' : 'en')}
      className="gap-2"
      aria-label={language === 'en' ? 'Switch to Telugu' : 'Switch to English'}
    >
      <Globe size={20} />
      {language === 'en' ? 'తెలుగు' : 'English'}
    </Button>
  );
};
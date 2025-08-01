import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { Menu, X, Scale, Shield, Smartphone, AlertTriangle, MessageCircle } from "lucide-react";

interface NavigationProps {
  language: 'en' | 'te';
  onLanguageChange: (lang: 'en' | 'te') => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation = ({ 
  language, 
  onLanguageChange, 
  currentPage, 
  onPageChange 
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      id: 'home',
      label: language === 'en' ? 'Home' : 'హోమ్',
      icon: Scale
    },
    {
      id: 'consumer-rights',
      label: language === 'en' ? 'Consumer Rights' : 'వినియోగదారుల హక్కులు',
      icon: Scale
    },
    {
      id: 'womens-safety',
      label: language === 'en' ? "Women's Safety" : 'మహిళల భద్రత',
      icon: Shield
    },
    {
      id: 'cyber-safety',
      label: language === 'en' ? 'Cyber Safety' : 'సైబర్ భద్రత',
      icon: Smartphone
    },
    {
      id: 'emergency-legal-help',
      label: language === 'en' ? 'Emergency Help' : 'అత్యవసర సహాయం',
      icon: AlertTriangle
    },
    {
      id: 'contact',
      label: language === 'en' ? 'Contact' : 'సంప్రదించండి',
      icon: MessageCircle
    }
  ];

  return (
    <nav className="bg-white shadow-soft border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-foreground">
              {language === 'en' ? 'Your Rights, Your Power' : 'మీ హక్కులు, మీ శక్తి'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => onPageChange(item.id)}
                  className="gap-2"
                >
                  <Icon size={18} />
                  {item.label}
                </Button>
              );
            })}
            <LanguageToggle 
              language={language} 
              onLanguageChange={onLanguageChange} 
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle 
              language={language} 
              onLanguageChange={onLanguageChange} 
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="justify-start gap-3 text-left"
                    size="lg"
                  >
                    <Icon size={20} />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
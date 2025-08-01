import { useState } from "react";
import { Navigation } from "./Navigation";
import { HomePage } from "./HomePage";
import { TopicPage } from "./TopicPage";
import { ContactForm } from "./ContactForm";

export const LegalAwarenessApp = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  const [currentPage, setCurrentPage] = useState('home');

  const handleLanguageChange = (lang: 'en' | 'te') => {
    setLanguage(lang);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage language={language} onPageChange={handlePageChange} />;
      case 'consumer-rights':
      case 'womens-safety':
      case 'cyber-safety':
      case 'emergency-legal-help':
        return (
          <TopicPage 
            topicId={currentPage} 
            language={language} 
            onBack={() => handlePageChange('home')} 
          />
        );
      case 'contact':
        return <ContactForm language={language} />;
      default:
        return <HomePage language={language} onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        language={language}
        onLanguageChange={handleLanguageChange}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {language === 'en' ? 'Your Rights, Your Power' : 'మీ హక్కులు, మీ శక్తి'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en' 
                  ? 'Empowering communities with legal knowledge and accessible guidance.'
                  : 'చట్టపరమైన జ్ఞానం మరియు అందుబాటులో ఉన్న మార్గదర్శకత్వంతో కమ్యూనిటీలను శక్తివంతం చేయడం.'
                }
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Quick Links' : 'త్వరిత లింకులు'}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => handlePageChange('home')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {language === 'en' ? 'Home' : 'హోమ్'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('consumer-rights')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {language === 'en' ? 'Consumer Rights' : 'వినియోగదారుల హక్కులు'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('emergency-legal-help')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {language === 'en' ? 'Emergency Help' : 'అత్యవసర సహాయం'}
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Contact' : 'సంప్రదించండి'}
              </h4>
              <button 
                onClick={() => handlePageChange('contact')}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {language === 'en' ? 'Send Feedback' : 'అభిప్రాయం పంపండి'}
              </button>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-4 text-center text-sm text-muted-foreground">
            © 2024 {language === 'en' ? 'Your Rights, Your Power' : 'మీ హక్కులు, మీ శక్తి'}. 
            {language === 'en' 
              ? ' Empowering communities through legal awareness.'
              : ' చట్టపరమైన అవగాహన ద్వారా కమ్యూనిటీలను శక్తివంతం చేయడం.'
            }
          </div>
        </div>
      </footer>
    </div>
  );
};
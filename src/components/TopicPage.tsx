import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VoiceButton } from "./VoiceButton";
import { legalTopics, emergencyContacts, LegalTopic } from "@/data/legalContent";
import { ArrowLeft, BookOpen, Phone, AlertTriangle, ExternalLink } from "lucide-react";

interface TopicPageProps {
  topicId: string;
  language: 'en' | 'te';
  onBack: () => void;
}

export const TopicPage = ({ topicId, language, onBack }: TopicPageProps) => {
  const topic = legalTopics.find(t => t.id === topicId);
  
  if (!topic) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Topic Not Found' : 'అంశం కనుగొనబడలేదు'}
        </h2>
        <Button onClick={onBack} variant="outline">
          {language === 'en' ? 'Go Back' : 'తిరిగి వెళ్ళు'}
        </Button>
      </div>
    );
  }

  const content = {
    en: {
      backButton: "Back to Home",
      examples: "Real-Life Examples",
      emergencyContacts: "Emergency Contacts",
      scenario: "Scenario",
      solution: "Solution",
      relevantLaw: "Relevant Law",
      callNow: "Call Now"
    },
    te: {
      backButton: "హోమ్‌కు తిరిగి వెళ్ళు",
      examples: "నిజ జీవిత ఉదాహరణలు",
      emergencyContacts: "అత్యవసర సంప్రదింపులు",
      scenario: "దృశ్యం",
      solution: "పరిష్కారం",
      relevantLaw: "సంబంధిత చట్టం",
      callNow: "ఇప్పుడు కాల్ చేయండి"
    }
  };

  const t = content[language];
  const topicContent = {
    title: language === 'en' ? topic.title : topic.titleTelugu,
    description: language === 'en' ? topic.description : topic.descriptionTelugu,
    examples: topic.examples.map(example => ({
      scenario: language === 'en' ? example.scenario : example.scenarioTelugu,
      solution: language === 'en' ? example.solution : example.solutionTelugu,
      law: language === 'en' ? example.law : example.lawTelugu
    }))
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="gap-2"
        >
          <ArrowLeft size={20} />
          {t.backButton}
        </Button>
      </div>

      {/* Topic Header */}
      <Card className="shadow-medium bg-gradient-primary text-white">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-4">
            <BookOpen size={36} />
            {topicContent.title}
            <VoiceButton 
              text={topicContent.title}
              language={language}
              mode="speak"
              className="ml-auto"
            />
          </CardTitle>
          <p className="text-lg opacity-90 mt-4">{topicContent.description}</p>
        </CardHeader>
      </Card>

      {/* Examples Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          {t.examples}
          <VoiceButton 
            text={t.examples}
            language={language}
            mode="speak"
          />
        </h2>
        
        <div className="grid gap-6">
          {topicContent.examples.map((example, index) => (
            <Card key={index} className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-3">
                  {t.scenario} {index + 1}
                  <VoiceButton 
                    text={`${t.scenario} ${index + 1}. ${example.scenario}`}
                    language={language}
                    mode="speak"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t.scenario}:</h4>
                  <p>{example.scenario}</p>
                </div>
                
                <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                  <h4 className="font-semibold text-success mb-2">{t.solution}:</h4>
                  <p>{example.solution}</p>
                </div>
                
                <div className="bg-warning/10 p-4 rounded-lg border border-warning/20">
                  <h4 className="font-semibold text-warning mb-2">{t.relevantLaw}:</h4>
                  <p className="text-sm">{example.law}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Emergency Contacts */}
      {topicId === 'emergency-help' && (
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle size={24} className="text-warning" />
            {t.emergencyContacts}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyContacts.national.map((contact, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {language === 'en' ? contact.name : contact.nametelugu}
                      </h3>
                      <p className="text-2xl font-bold text-primary">{contact.number}</p>
                    </div>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => window.open(`tel:${contact.number}`, '_self')}
                      className="gap-2"
                    >
                      <Phone size={16} />
                      {t.callNow}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Additional Resources */}
      <Card className="shadow-medium bg-accent/10">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' 
              ? 'Need More Help?' 
              : 'మరింత సహాయం కావాలా?'
            }
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'en' 
              ? 'Contact our legal helpline for personalized assistance'
              : 'వ్యక్తిగత సహాయం కోసం మా న్యాయ హెల్ప్‌లైన్‌ను సంప్రదించండి'
            }
          </p>
          <Button variant="default" size="lg" className="gap-2">
            <Phone size={20} />
            {language === 'en' ? 'Contact Helpline' : 'హెల్ప్‌లైన్‌ను సంప్రదించండి'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
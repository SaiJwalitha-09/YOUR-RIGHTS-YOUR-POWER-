import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { VoiceButton } from "./ui/VoiceButton";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle, CheckCircle } from "lucide-react";

interface ContactFormProps {
  language: 'en' | 'te';
}

export const ContactForm = ({ language }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const content = {
    en: {
      title: "Contact Us for Feedback",
      subtitle: "Help us improve our platform by sharing your thoughts",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      messageLabel: "Your Feedback or Question",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "Enter your email address",
      messagePlaceholder: "Share your feedback, suggestions, or ask questions about legal rights...",
      submit: "Send Feedback",
      successTitle: "Thank You!",
      successMessage: "Your feedback has been received. We'll review it and get back to you if needed.",
      newFeedback: "Send Another Feedback",
      required: "This field is required"
    },
    te: {
      title: "అభిప్రాయం కోసం మమ్మల్ని సంప్రదించండి",
      subtitle: "మీ ఆలోచనలను పంచుకోవడం ద్వారా మా ప్లాట్‌ఫారమ్‌ను మెరుగుపరచడంలో మాకు సహాయపడండి",
      nameLabel: "మీ పేరు",
      emailLabel: "ఇమెయిల్ చిరునామా",
      messageLabel: "మీ అభిప్రాయం లేదా ప్రశ్న",
      namePlaceholder: "మీ పూర్తి పేరు నమోదు చేయండి",
      emailPlaceholder: "మీ ఇమెయిల్ చిరునామా నమోదు చేయండి",
      messagePlaceholder: "మీ అభిప్రాయం, సూచనలు పంచుకోండి లేదా చట్టపరమైన హక్కుల గురించి ప్రశ్నలు అడగండి...",
      submit: "అభిప్రాయం పంపండి",
      successTitle: "ధన్యవాదాలు!",
      successMessage: "మీ అభిప్రాయం అందుకున్నాము. మేము దానిని సమీక్షించి అవసరమైతే మీకు తిరిగి సంప్రదిస్తాము.",
      newFeedback: "మరొక అభిప్రాయం పంపండి",
      required: "ఈ ఫీల్డ్ తప్పనిసరి"
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: t.required,
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: t.successTitle,
      description: t.successMessage,
    });
  };

  const handleVoiceInput = (field: 'name' | 'message') => (transcript: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: transcript
    }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-medium text-center">
          <CardContent className="py-12">
            <CheckCircle size={64} className="mx-auto text-success mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-success">{t.successTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.successMessage}</p>
            <Button onClick={resetForm} variant="outline" size="lg">
              {t.newFeedback}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
            <MessageCircle size={28} />
            {t.title}
            <VoiceButton 
              text={t.title}
              language={language}
              mode="speak"
            />
          </CardTitle>
          <p className="text-center text-muted-foreground">{t.subtitle}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium">
                {t.nameLabel} *
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="text-base pr-14"
                  required
                />
                <VoiceButton
                  onTranscript={handleVoiceInput('name')}
                  language={language}
                  mode="listen"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                {t.emailLabel} *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-medium">
                {t.messageLabel} *
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="min-h-[120px] text-base pr-16"
                  required
                />
                <VoiceButton
                  onTranscript={handleVoiceInput('message')}
                  language={language}
                  mode="listen"
                  className="absolute bottom-3 right-3"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full gap-2">
              <Send size={20} />
              {t.submit}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
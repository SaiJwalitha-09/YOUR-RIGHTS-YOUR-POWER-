import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VoiceButton } from "./VoiceButton";
import { ProblemSubmission } from "./ProblemSubmission";
import { Scale, Shield, Smartphone, AlertTriangle, Download, Users, BookOpen, Heart } from "lucide-react";

interface HomePageProps {
  language: 'en' | 'te';
  onPageChange: (page: string) => void;
}

export const HomePage = ({ language, onPageChange }: HomePageProps) => {
  const content = {
    en: {
      hero: {
        title: "Your Rights, Your Power",
        subtitle: "Empowering Rural and Underprivileged Communities with Legal Knowledge",
        description: "Access free legal guidance, understand your rights, and get help when you need it most. Available in English and Telugu with voice support for everyone.",
        cta: "Start Learning Your Rights"
      },
      purpose: {
        title: "Bridging the Legal Awareness Gap",
        description: "Many people in rural and underprivileged areas are unaware of their legal rights. Our mission is to make legal information accessible, understandable, and actionable for everyone.",
        stats: [
          { icon: Users, label: "Communities Served", value: "1000+" },
          { icon: BookOpen, label: "Legal Topics Covered", value: "50+" },
          { icon: Heart, label: "People Helped", value: "5000+" }
        ]
      },
      topics: [
        {
          id: 'consumer-rights',
          title: 'Consumer Rights',
          description: 'Know your rights when buying goods and services',
          icon: Scale
        },
        {
          id: 'womens-safety',
          title: "Women's Safety Laws",
          description: 'Legal protections and rights for women',
          icon: Shield
        },
        {
          id: 'cyber-safety',
          title: 'Cyber Safety',
          description: 'Protection against online fraud and cybercrime',
          icon: Smartphone
        },
        {
          id: 'emergency-legal-help',
          title: 'Emergency Legal Help',
          description: 'Immediate assistance and emergency contacts',
          icon: AlertTriangle
        }
      ],
      features: {
        title: "Why Choose Our Platform?",
        items: [
          {
            title: "Voice Enabled",
            description: "Listen to content and speak your problems"
          },
          {
            title: "Bilingual Support",
            description: "Available in English and Telugu"
          },
          {
            title: "Accessible Design",
            description: "Large fonts and clear navigation for all ages"
          },
          {
            title: "Real Examples",
            description: "Learn from real-life legal scenarios"
          }
        ]
      },
      downloadApp: {
        title: "Get the Mobile App",
        description: "Download our mobile app for offline access and better convenience",
        button: "Download App"
      }
    },
    te: {
      hero: {
        title: "మీ హక్కులు, మీ శక్తి",
        subtitle: "గ్రామీణ మరియు వెనుకబడిన వర్గాలకు చట్టపరమైన జ్ఞానంతో శక్తివంతం చేయడం",
        description: "ఉచిత న్యాయ మార్గదర్శకత్వాన్ని పొందండి, మీ హక్కులను అర్థం చేసుకోండి మరియు మీకు అవసరమైనప్పుడు సహాయం పొందండి. ఇంగ్లీష్ మరియు తెలుగులో అందరికోసం వాయిస్ సపోర్ట్‌తో అందుబాటులో ఉంది.",
        cta: "మీ హక్కులను తెలుసుకోవడం ప్రారంభించండి"
      },
      purpose: {
        title: "చట్టపరమైన అవగాహన అంతరాన్ని తగ్గించడం",
        description: "గ్రామీణ మరియు వెనుకబడిన ప్రాంతాల్లోని చాలా మంది వారి చట్టపరమైన హక్కుల గురించి తెలియదు. చట్టపరమైన సమాచారాన్ని అందరికీ అందుబాటులో, అర్థమయ్యేలా మరియు అమలు చేయగలిగేలా చేయడం మా లక్ష్యం.",
        stats: [
          { icon: Users, label: "సేవలందించిన కమ్యూనిటీలు", value: "1000+" },
          { icon: BookOpen, label: "కవర్ చేసిన చట్టపరమైన అంశాలు", value: "50+" },
          { icon: Heart, label: "సహాయం చేసిన వ్యక్తులు", value: "5000+" }
        ]
      },
      topics: [
        {
          id: 'consumer-rights',
          title: 'వినియోగదారుల హక్కులు',
          description: 'వస్తువులు మరియు సేవలను కొనుగోలు చేసేటప్పుడు మీ హక్కులను తెలుసుకోండి',
          icon: Scale
        },
        {
          id: 'womens-safety',
          title: 'మహిళల భద్రతా చట్టాలు',
          description: 'మహిళలకు చట్టపరమైన రక్షణలు మరియు హక్కులు',
          icon: Shield
        },
        {
          id: 'cyber-safety',
          title: 'సైబర్ భద్రత',
          description: 'ఆన్‌లైన్ మోసం మరియు సైబర్ నేరాలకు వ్యతిరేకంగా రక్షణ',
          icon: Smartphone
        },
        {
          id: 'emergency-legal-help',
          title: 'అత్యవసర చట్టపరమైన సహాయం',
          description: 'తక్షణ సహాయం మరియు అత్యవసర సంప్రదింపులు',
          icon: AlertTriangle
        }
      ],
      features: {
        title: "మా ప్లాట్‌ఫారమ్‌ను ఎందుకు ఎంచుకోవాలి?",
        items: [
          {
            title: "వాయిస్ ఎనేబుల్డ్",
            description: "కంటెంట్‌ను వినండి మరియు మీ సమస్యలను మాట్లాడండి"
          },
          {
            title: "ద్విభాషా మద్దతు",
            description: "ఇంగ్లీష్ మరియు తెలుగులో అందుబాటులో"
          },
          {
            title: "అందుబాటు డిజైన్",
            description: "అన్ని వయస్సుల వారికోసం పెద్ద ఫాంట్లు మరియు స్పష్టమైన నావిగేషన్"
          },
          {
            title: "నిజమైన ఉదాహరణలు",
            description: "నిజ జీవిత చట్టపరమైన దృశ్యాల నుండి నేర్చుకోండి"
          }
        ]
      },
      downloadApp: {
        title: "మొబైల్ యాప్‌ను పొందండి",
        description: "ఆఫ్‌లైన్ యాక్సెస్ మరియు మెరుగైన సౌలభ్యం కోసం మా మొబైల్ యాప్‌ను డౌన్‌లోడ్ చేయండి",
        button: "యాప్ డౌన్‌లోడ్ చేయండి"
      }
    }
  };

  const t = content[language];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 px-4 rounded-2xl shadow-strong">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Scale size={48} className="text-accent" />
            <h1 className="text-4xl md:text-6xl font-bold">{t.hero.title}</h1>
            <VoiceButton 
              text={t.hero.title}
              language={language}
              mode="speak"
              className="ml-4"
            />
          </div>
          
          <h2 className="text-xl md:text-2xl font-medium opacity-90">
            {t.hero.subtitle}
          </h2>
          
          <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => onPageChange('consumer-rights')}
            className="mt-8"
          >
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              {t.purpose.title}
              <VoiceButton 
                text={t.purpose.title}
                language={language}
                mode="speak"
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.purpose.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.purpose.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center shadow-soft">
                  <CardContent className="pt-6">
                    <Icon size={40} className="mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Submission */}
      <section className="py-12 bg-muted/30 rounded-2xl">
        <div className="px-4">
          <ProblemSubmission language={language} />
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            {language === 'en' ? 'Legal Topics' : 'చట్టపరమైన అంశాలు'}
            <VoiceButton 
              text={language === 'en' ? 'Legal Topics' : 'చట్టపరమైన అంశాలు'}
              language={language}
              mode="speak"
            />
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card 
                  key={topic.id}
                  className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:scale-105"
                  onClick={() => onPageChange(topic.id)}
                >
                  <CardHeader className="text-center">
                    <Icon size={48} className="mx-auto mb-4 text-primary" />
                    <CardTitle className="flex items-center justify-center gap-2">
                      {topic.title}
                      <VoiceButton 
                        text={topic.title}
                        language={language}
                        mode="speak"
                        className="ml-2"
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-secondary/10 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-12">
        <Card className="max-w-4xl mx-auto text-center shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center justify-center gap-3">
              <Download size={32} className="text-primary" />
              {t.downloadApp.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-6">{t.downloadApp.description}</p>
            <Button variant="hero" size="lg" className="gap-2">
              <Download size={20} />
              {t.downloadApp.button}
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
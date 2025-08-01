import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { VoiceButton } from "./VoiceButton";
import { matchProblemToTopic, getRelevantExample, LegalTopic } from "@/data/legalContent";
import { Send, MessageSquare, Lightbulb } from "lucide-react";

interface ProblemSubmissionProps {
  language: 'en' | 'te';
}

export const ProblemSubmission = ({ language }: ProblemSubmissionProps) => {
  const [userInput, setUserInput] = useState('');
  const [matchedTopic, setMatchedTopic] = useState<LegalTopic | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    
    const topic = matchProblemToTopic(userInput);
    setMatchedTopic(topic);
    setIsSubmitted(true);
  };

  const handleVoiceTranscript = (transcript: string) => {
    setUserInput(transcript);
  };

  const handleReset = () => {
    setUserInput('');
    setMatchedTopic(null);
    setIsSubmitted(false);
  };

  const content = {
    en: {
      title: "Submit Your Problem",
      placeholder: "Describe your legal issue here... For example: 'Someone cheated me while shopping' or 'I am facing harassment at workplace'",
      submit: "Get Legal Guidance",
      reset: "Ask Another Question",
      noMatch: "We couldn't find a specific match for your problem. Please contact our helpline for personalized assistance.",
      matchFound: "Based on your problem, here's what you need to know:",
      relevantLaw: "Relevant Law:",
      solution: "What you can do:",
      example: "Similar Case:",
      helpText: "Speak your problem or type it in the box below"
    },
    te: {
      title: "మీ సమస్యను సమర్పించండి",
      placeholder: "మీ చట్టపరమైన సమస్యను ఇక్కడ వివరించండి... ఉదాహరణకు: 'షాపింగ్ చేస్తున్నప్పుడు ఎవరో నన్ను మోసం చేశారు' లేదా 'కార్యాలయంలో వేధింపులు ఎదుర్కొంటున్నాను'",
      submit: "న్యాయ మార్గదర్శకత్వం పొందండి",
      reset: "మరొక ప్రశ్న అడగండి",
      noMatch: "మీ సమస్యకు సంబంధించిన నిర్దిష్ట సమాధానం మాకు కనుగొనలేకపోయింది. వ్యక్తిగత సహాయం కోసం మా హెల్ప్‌లైన్‌ను సంప్రదించండి.",
      matchFound: "మీ సమస్య ఆధారంగా, మీరు తెలుసుకోవలసినవి:",
      relevantLaw: "సంబంధిత చట్టం:",
      solution: "మీరు చేయగలిగినవి:",
      example: "సారూప్య కేసు:",
      helpText: "మీ సమస్యను మాట్లాడండి లేదా కింది బాక్స్‌లో టైప్ చేయండి"
    }
  };

  const t = content[language];

  if (isSubmitted && matchedTopic) {
    const example = getRelevantExample(matchedTopic, userInput);
    const topicContent = language === 'en' ? {
      title: matchedTopic.title,
      description: matchedTopic.description,
      scenario: example.scenario,
      solution: example.solution,
      law: example.law
    } : {
      title: matchedTopic.titleTelugu,
      description: matchedTopic.descriptionTelugu,
      scenario: example.scenarioTelugu,
      solution: example.solutionTelugu,
      law: example.lawTelugu
    };

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="shadow-medium">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-success flex items-center gap-2">
                <Lightbulb size={24} />
                {t.matchFound}
              </CardTitle>
              <VoiceButton 
                text={`${topicContent.title}. ${topicContent.description}`}
                language={language}
                mode="speak"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{topicContent.title}</h3>
              <p className="text-muted-foreground">{topicContent.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">{t.example}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3 font-medium">{topicContent.scenario}</p>
                  <div className="bg-secondary/20 p-3 rounded">
                    <p className="text-sm"><strong>{t.solution}</strong></p>
                    <p className="text-sm mt-1">{topicContent.solution}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-warning">{t.relevantLaw}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-warning/10 p-3 rounded">
                    <p className="text-sm font-medium">{topicContent.law}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button onClick={handleReset} variant="outline" size="lg">
                {t.reset}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isSubmitted && !matchedTopic) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-medium">
          <CardContent className="text-center py-8">
            <p className="text-lg mb-4">{t.noMatch}</p>
            <Button onClick={handleReset} variant="outline" size="lg">
              {t.reset}
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
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <MessageSquare size={24} />
            {t.title}
          </CardTitle>
          <p className="text-center text-muted-foreground">{t.helpText}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Textarea
              placeholder={t.placeholder}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="min-h-[120px] text-base pr-16"
              aria-label="Describe your legal problem"
            />
            <VoiceButton
              onTranscript={handleVoiceTranscript}
              language={language}
              mode="listen"
              className="absolute bottom-3 right-3"
            />
          </div>
          
          <Button 
            onClick={handleSubmit}
            disabled={!userInput.trim()}
            size="lg"
            className="w-full gap-2"
          >
            <Send size={20} />
            {t.submit}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
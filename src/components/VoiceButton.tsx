import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

interface VoiceButtonProps {
  text?: string;
  onTranscript?: (transcript: string) => void;
  language: 'en' | 'te';
  mode: 'speak' | 'listen';
  className?: string;
}

export const VoiceButton = ({ 
  text, 
  onTranscript, 
  language, 
  mode, 
  className 
}: VoiceButtonProps) => {
  const { speak, stop: stopSpeaking, isSpeaking, isSupported: ttsSupported } = useTextToSpeech();
  const { 
    startListening, 
    stopListening, 
    transcript, 
    isListening, 
    isSupported: sttSupported 
  } = useSpeechRecognition();

  const handleSpeakClick = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else if (text) {
      const lang = language === 'te' ? 'te-IN' : 'en-US';
      speak(text, lang);
    }
  };

  const handleListenClick = () => {
    if (isListening) {
      stopListening();
    } else {
      const lang = language === 'te' ? 'te-IN' : 'en-US';
      startListening(lang);
    }
  };

  // Handle transcript changes
  if (transcript && onTranscript) {
    onTranscript(transcript);
  }

  if (mode === 'speak') {
    if (!ttsSupported || !text) return null;
    
    return (
      <Button
        variant="voice"
        size="icon"
        onClick={handleSpeakClick}
        className={className}
        aria-label={isSpeaking ? "Stop speaking" : "Read aloud"}
      >
        {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </Button>
    );
  }

  if (mode === 'listen') {
    if (!sttSupported) return null;
    
    return (
      <Button
        variant="voice"
        size="icon"
        onClick={handleListenClick}
        className={className}
        aria-label={isListening ? "Stop listening" : "Start voice input"}
      >
        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
      </Button>
    );
  }

  return null;
};
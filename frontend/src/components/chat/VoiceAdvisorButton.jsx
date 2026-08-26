import React, { useState, useEffect, useCallback } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { cn } from '../ui/Button';

export function VoiceAdvisorButton({ onTranscript, className }) {
  const [isListening, setIsListening] = useState(false);
  const [dots, setDots] = useState('');

  const startListening = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Your browser does not support Speech Recognition. Please try using Chrome or Edge.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // You could map this to the selected language context if needed
    recognition.lang = 'en-IN'; 
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (transcript) {
        onTranscript(transcript);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  }, [onTranscript]);

  useEffect(() => {
    let interval;
    if (isListening) {
      interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <button
      type="button"
      onClick={startListening}
      disabled={isListening}
      className={cn(
        "flex items-center justify-center rounded-full p-2.5 transition-all duration-300",
        isListening 
          ? "bg-red-100 text-red-600 animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
          : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200",
        className
      )}
      title="Voice Advisor"
    >
      <Mic className="w-5 h-5" />
      {isListening && <span className="sr-only">Listening{dots}</span>}
    </button>
  );
}

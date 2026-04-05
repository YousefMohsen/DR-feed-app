import * as Speech from "expo-speech";
import { useCallback, useEffect, useState } from "react";

type UseSpeechOptions = {
  language?: string;
  rate?: number;
};

/**
 * Will use the system's text-to-speech to read the article text.
 */
export function useSpeech(options?: UseSpeechOptions) {
  const { language = "da-DK", rate = 0.8 } = options ?? {};
  const [isReading, setIsReading] = useState(false);

  const stop = useCallback(() => {
    Speech.stop();
    setIsReading(false);
  }, []);

  /**
   * Will speak the text using the system's text-to-speech.
   * @param text - The text to speak.
   */
  const speak = useCallback(
    (text: string) => {
      if (!text) return;

      Speech.stop();
      setIsReading(true);

      Speech.speak(text, {
        language,
        rate,
        onDone: () => setIsReading(false),
        onStopped: () => setIsReading(false),
        onError: () => setIsReading(false),
      });
    },
    [language, rate],
  );

  /**
   * Toggle between speaking and stopping.
   */
  const toggleSpeak = useCallback(
    (text: string) => {
      if (isReading) {
        stop();
      } else {
        speak(text);
      }
    },
    [isReading, speak, stop],
  );

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  return {
    isReading,
    speak,
    stop,
    toggleSpeak,
  };
}

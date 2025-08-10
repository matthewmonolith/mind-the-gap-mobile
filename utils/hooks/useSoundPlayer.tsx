import { useEffect, useMemo } from "react";
import { useAudioPlayer, setAudioModeAsync } from "expo-audio";

type SoundItem = { name: string; sound: number };

export function useSoundPlayer(sounds: SoundItem[], name: string) {
  const source = useMemo(() => sounds.find(s => s.name === name)?.sound, [sounds, name]);
  const player = useAudioPlayer(source);

  useEffect(() => {
    setAudioModeAsync({ playsInSilentMode: true }).catch(() => {});
  }, []);

  useEffect(() => {
    return () => {
      player.remove();
    };
  }, [player]);

  const play = () => {
    if (!source) return;
    player.seekTo(0);
    player.play();
  };

  return { play, isReady: !!source };
}

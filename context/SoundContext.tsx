import React, { createContext, useReducer, ReactNode } from "react";
import { reminderSounds, meditationSounds } from "../utils/Sounds";
import { useAudioPlayer } from 'expo-audio';

export const SET_REMINDER_SOUND = "SET_REMINDER_SOUND" as const;
export const SET_MEDITATION_SOUND = "SET_MEDITATION_SOUND" as const;

type SoundState = {
  reminderSound: string;
  meditationSound: string;
};

type SoundAction =
  | { type: typeof SET_REMINDER_SOUND; payload: string }
  | { type: typeof SET_MEDITATION_SOUND; payload: string };

const initialState: SoundState = {
  reminderSound: "Chime",
  meditationSound: "Wind Chimes",
};

type SoundContextType = {
  state: SoundState;
  dispatch: React.Dispatch<SoundAction>;
  handlePlaySound: (isMeditation: boolean) => void | Promise<void>;
};

function soundReducer(state: SoundState, action: SoundAction): SoundState {
  switch (action.type) {
    case SET_REMINDER_SOUND:
      return { ...state, reminderSound: action.payload };
    case SET_MEDITATION_SOUND:
      return { ...state, meditationSound: action.payload };
    default:
      return state;
  }
}

const SoundContext = createContext<SoundContextType>({
  state: initialState,
  dispatch: () => {},
  handlePlaySound: () => {},
});

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(soundReducer, initialState);

  const handlePlaySound = async (isMeditation: boolean) => {
    const sounds = isMeditation ? meditationSounds : reminderSounds;
    const soundName = isMeditation
      ? state.meditationSound
      : state.reminderSound;

    const currentSound = sounds.find((s) => s.name === soundName);
    if (!currentSound) {
      console.warn(`Sound "${soundName}" not found.`);
      return;
    }

    // const { sound } = await Audio.Sound.createAsync(currentSound.sound);
    // await sound.playAsync();
  };

  return (
    <SoundContext.Provider value={{ state, dispatch, handlePlaySound }}>
      {children}
    </SoundContext.Provider>
  );
}

export { SoundContext, Provider };

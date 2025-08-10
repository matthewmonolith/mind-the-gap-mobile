import { createContext, useReducer, ReactNode } from "react";
import { reminderSounds, meditationSounds } from "../utils/Sounds";
import { useAudioPlayer } from "expo-audio";

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
});

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(soundReducer, initialState);

  return (
    <SoundContext.Provider value={{ state, dispatch }}>
      {children}
    </SoundContext.Provider>
  );
}

export { SoundContext, Provider };

import { createContext, useReducer, ReactNode } from "react";
import { reminderSounds, meditationSounds } from "../utils/Sounds"

export const SET_REMINDER_SOUND = "SET_REMINDER_SOUND";
export const SET_MEDITATION_SOUND = "SET_MEDITATION_SOUND";
export const SET_VOLUME = "SET_VOLUME";
export const MUTE = "MUTE";
export const UNMUTE = "UNMUTE";
export const PLAY_SOUND = "PLAY_SOUND";

const initialState = {
  reminderSound: "Chime",
  meditationSound: "Wind Chimes",
  volume: 1,
};

const soundReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case SET_REMINDER_SOUND:
      return { ...state, reminderSound: action.payload };
    case SET_MEDITATION_SOUND:
      return { ...state, meditationSound: action.payload };
    case SET_VOLUME:
      return { ...state, volume: action.payload };
    case MUTE:
      return { ...state, volume: 0 };
    case UNMUTE:
      return { ...state, volume: 1 };
    case PLAY_SOUND: {
      const { isMeditation } = action.payload;
      const sounds = isMeditation ? meditationSounds : reminderSounds;
      const soundName = isMeditation
        ? state.meditationSound
        : state.reminderSound;

      const currentSound = soundName
        ? sounds.find((s) => s.name === soundName)
        : null;
      if (!currentSound) return state;

      const audio = new Audio(currentSound.soundPath);
      audio.volume = state.volume;
      audio.play();
      return state;
    }
    default:
      return state;
  }
};

const SoundContext = createContext({
  ...initialState,
  dispatch: (_: any) => {},
});

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(soundReducer, initialState);

  return (
    <SoundContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SoundContext.Provider>
  );
}

export { SoundContext, Provider };

// examples:
// dispatch({ type: SET_REMINDER_SOUND, payload: "Bell" });
// dispatch({ type: PLAY_SOUND, payload: { isMeditation: false } });

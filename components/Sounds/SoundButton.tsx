import { Pressable, StyleSheet, Text } from "react-native";
import Colours from "../../utils/Colours";
import { useContext } from "react";
import { SoundContext } from "../../context/SoundContext";
import {
  SET_MEDITATION_SOUND,
  SET_REMINDER_SOUND,
} from "../../context/SoundContext";

const SoundButton = ({
  buttonText,
  soundName,
  isMeditationSound,
}: {
  buttonText: string;
  isMeditationSound: boolean;
  soundName: string;
}) => {

  const { dispatch, state: { meditationSound, reminderSound } } = useContext(SoundContext);

  const soundToUse = isMeditationSound ? meditationSound : reminderSound;

  return (
    <Pressable
      onPress={() => {
        dispatch({
          type: isMeditationSound ? SET_MEDITATION_SOUND : SET_REMINDER_SOUND,
          payload: soundName,
        });
      }}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, soundName == soundToUse && {backgroundColor: Colours.darker}]}
      android_ripple={{ color: Colours.light }}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};
export default SoundButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.lighter,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 9999,
    width: "80%",
    alignSelf: "center",
    maxWidth: 420,
  },
  buttonPressed: { opacity: 0.5 },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

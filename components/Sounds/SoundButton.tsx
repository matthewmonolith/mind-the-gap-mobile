import { Pressable, StyleSheet, Text } from "react-native";
import Colours from "../../utils/Colours";
import { useContext } from "react";
import { SoundContext } from "../../context/SoundContext";
import {
  SET_MEDITATION_SOUND,
  SET_REMINDER_SOUND,
} from "../../context/SoundContext";

// const { dispatch } = useContext(SoundContext);

const SoundButton = ({
  buttonText,
  soundName,
  isMeditationSound,
}: {
  buttonText: string;
  isMeditationSound: boolean
  soundName: string;
}) => {
  return (
      <Pressable
        // onPress={() => {
          
        // }}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        android_ripple={{color: Colours.light}}
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
    width: "80%",            // ✅ consistent width in portrait & landscape
    alignSelf: "center",     // ✅ center within its column
    maxWidth: 420,           // optional: cap on big tablets
  },
  buttonPressed: { opacity: 0.5 },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

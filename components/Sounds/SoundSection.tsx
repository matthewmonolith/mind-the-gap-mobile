import { useRef, useEffect } from "react";
import { Animated, StyleSheet, Easing, View, Text } from "react-native";
import Colours from "../../utils/Colours";
import SoundButton from "./SoundButton";

const SoundSection = ({
  sounds,
  isMeditationSound,
}: {
  sounds: { name: string }[];
  isMeditationSound: boolean;
}) => {
  return (
    <View style={styles.categoryBlock}>
      <Text style={styles.categoryTitle}>
        {isMeditationSound ? "Meditation Sounds" : "Reminder Sounds"}
      </Text>
      <View style={styles.buttonsContainer}>
        {sounds.map((sound) => (
          <View key={sound.name} style={{ width: "100%" }}>
            <SoundButton
              soundName={sound.name}
              buttonText={sound.name}
              isMeditationSound={isMeditationSound}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default SoundSection;

const styles = StyleSheet.create({
  categoryBlock: {
    flex: 1, // each section takes half when parent is row
    paddingHorizontal: 8,
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
    color: "white",
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%", // container spans column
    alignItems: "center", // center buttons horizontally
  },
});

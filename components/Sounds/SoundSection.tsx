import { useRef, useEffect } from "react";
import { Animated, StyleSheet, Easing, View, Text } from "react-native";
import Colours from "../../utils/Colours";
import SoundButton from "./SoundButton";

const SoundSection = ({ visible }: { visible: boolean }) => {
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: visible ? 200 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [visible]);

  const onPress = (soundName: string) => {
    console.log(soundName);
  };

  return (
    <Animated.View style={[styles.container, { height: heightAnim }]}>
      <View style={styles.sectionWrapper}>
        <View style={styles.categoryBlock}>
          <Text style={styles.categoryTitle}>Meditation Sounds</Text>
          <SoundButton
            buttonText="Wind Chimes"
            onPress={onPress}
            soundName="wind"
          />
          <SoundButton
            buttonText="Piano"
            onPress={onPress}
            soundName="piano"
          />
          <SoundButton
            buttonText="Melody"
            onPress={onPress}
            soundName="melody"
          />
        </View>
        <View style={styles.categoryBlock}>
          <Text style={styles.categoryTitle}>Reminder Sounds</Text>
          <SoundButton
            buttonText="Chime"
            onPress={onPress}
            soundName="wind"
          />
          <SoundButton
            buttonText="Deep Breath"
            onPress={onPress}
            soundName="piano"
          />
          <SoundButton
            buttonText="Ding"
            onPress={onPress}
            soundName="melody"
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default SoundSection;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: Colours.light,
  },
  sectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryBlock: {
    flex: 1,
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
    color: "white",
  },
});

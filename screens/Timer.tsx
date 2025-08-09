import { ScrollView, StyleSheet, Animated, View, Easing } from "react-native";
import Header from "../components/UI/Header";
import { TimerSection } from "../components/Timers/TimerSection";
import { mainTimes, reminderTimes } from "../utils/Times";
import { useReducer, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SoundsButton from "../components/Sounds/SoundsButton";
import SoundSection from "../components/Sounds/SoundSection";
import { reminderSounds, meditationSounds } from "../utils/Sounds";
import Colours from "../utils/Colours";

const Timer = () => {
  const navigation = useNavigation();
  type TimerAction =
    | { type: "SET_SELECTED_TIMER"; payload: string }
    | { type: "SET_SELECTED_REMINDER"; payload: string }
    | { type: "TOGGLE_SOUNDS" }
    | { type: "RESET" };

  const reducer = (
    state: {
      selectedTimer: string;
      selectedReminder: string;
      showSounds: boolean;
    },
    action: TimerAction
  ) => {
    switch (action.type) {
      case "SET_SELECTED_TIMER":
        return {
          ...state,
          selectedTimer: action.payload,
        };
      case "SET_SELECTED_REMINDER":
        return {
          ...state,
          selectedReminder: action.payload,
        };
      case "TOGGLE_SOUNDS":
        return {
          ...state,
          showSounds: !state.showSounds,
        };
      case "RESET":
        return {
          ...state,
          selectedTimer: "",
          selectedReminder: "",
        };
      default:
        throw new Error("Invalid action type passed into reducer");
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    selectedTimer: "",
    selectedReminder: "",
    showSounds: false,
  });

  const handlePress = (time: string, type: string) => {
    if (type == "main") {
      dispatch({ type: "SET_SELECTED_TIMER", payload: time });
    } else {
      dispatch({ type: "SET_SELECTED_REMINDER", payload: time });
    }
  };

  const handleHeaderButtonPress = () => {
    dispatch({ type: "TOGGLE_SOUNDS" });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SoundsButton onPress={handleHeaderButtonPress} />,
    });
  }, []);

  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: state.showSounds ? 200 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [state.showSounds]);

  return (
    <View style={styles.container}>
      {state.showSounds && (
        <Animated.View
          style={[styles.animatedContainer, { height: heightAnim }]}
        >
          <SoundSection sounds={meditationSounds} isMeditationSound={true} />
          <SoundSection sounds={reminderSounds} isMeditationSound={false} />
        </Animated.View>
      )}
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <Header title="Meditation Timers" bgColour="dark" />
        <TimerSection
          times={mainTimes}
          selectedTime={state.selectedTimer}
          handlePress={handlePress}
          type="main"
        />
        <Header title="Reminder Timers" bgColour="light" />
        <TimerSection
          times={reminderTimes}
          selectedTime={state.selectedReminder}
          handlePress={handlePress}
          type="reminder"
        />
      </ScrollView>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  animatedContainer: {
    overflow: "hidden",
    backgroundColor: Colours.light,
    flexDirection: "row", // ✅ two columns side-by-side
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  contentWrapper: { flexGrow: 1, paddingBottom: 150 },
});

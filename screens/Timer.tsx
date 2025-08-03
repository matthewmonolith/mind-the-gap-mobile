import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/UI/Header";
import { TimerSection } from "../components/Timers/TimerSection";
import { mainTimes } from "../utils/Times";
import { useReducer } from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SoundsButton from "../components/Sounds/SoundsButton";
import SoundSection from "../components/Sounds/SoundSection";

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

  return (
    <View style={styles.container}>
      {state.showSounds && <SoundSection visible={state.showSounds} />}
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <Header title="Meditation Timers" bgColour="dark" />
        <TimerSection
          times={mainTimes}
          selectedTime={state.selectedTimer}
          handlePress={handlePress}
          type="main"
        />
      </ScrollView>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
});

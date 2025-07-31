import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/UI/Header";
import { TimerSection } from "../components/Timers/TimerSection";

const Timer = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <Header title="Meditation Timers" bgColour="dark" />
        <TimerSection times={mainTimes} selectedTime={state.selectedTimer} handleClick={handleClick} type="main"/>
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

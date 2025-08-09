import { View, StyleSheet } from "react-native";
import Timer from "./Timer";
import { TimerButton } from "../UI/Buttons";

type TimerSectionProps = {
  times: string[];
  selectedTime: string;
  handlePress: (time: string, type: string) => void;
  type: "main" | "reminder";
};

export const TimerSection = ({
  times,
  selectedTime,
  handlePress,
  type,
}: TimerSectionProps) => {
  return (
    <View style={styles.container}>
      {times.map((time) => {
        const isSelected = selectedTime === time;

        return isSelected ? (
          type === "main" ? (
            <Timer timeStamp={time} key={time} isMeditation={true} />
          ) : (
            <Timer timeStamp={time} key={time} isMeditation={false} />
          )
        ) : (
          <TimerButton
            key={time || time}
            type={type === "reminder" ? "reminder" : undefined}
            expiryTimestamp={time || time}
            handlePress={() => handlePress(time || time, type)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 16,
    gap: 12,
  },
});

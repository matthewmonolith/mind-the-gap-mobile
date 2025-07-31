import React from "react";
import { View, StyleSheet } from "react-native";
import Timer from "./Timer";
import { TimerButton } from "../UI/Buttons";

type TimerSectionProps = {
  times: string[];
  selectedTime: string;
  handleClick: (time: string, type: string) => void;
  type: "main" | "reminder";
};

export const TimerSection = ({
  times,
  selectedTime,
  handleClick,
  type,
}: TimerSectionProps) => {
  return (
    <View style={styles.container}>
      {times.map((time) => {
        const isSelected = selectedTime === time;

        if (isSelected) {
          return (
            <Timer
              timeStamp={time}
              key={time}
              isMeditation={type === "main"}
            />
          );
        }

        return (
          <TimerButton
            key={time}
            type={type === "reminder" ? "reminder" : undefined}
            expiryTimestamp={time}
            handleClick={() => handleClick(time, type)}
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

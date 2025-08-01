import { Pressable, StyleSheet, Text, View } from "react-native";
import Colours from "../../utils/Colours";

export const TimerButton = ({
  expiryTimestamp,
  handleClick,
  type = "main",
}: {
  expiryTimestamp: string;
  handleClick: () => void;
  type?: "main" | "reminder";
}) => {
  return (
    <View>
      <Pressable
        style={[
          styles.timerButton,
          { backgroundColor: type === "main" ? Colours.dark : Colours.light },
        ]}
        // android_ripple={{color: ''}}
      >
        {expiryTimestamp}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  timerButton: {
    marginVertical: 4,
    marginHorizontal: 3,
    width: 160,
    height: 160,
    borderRadius: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
});

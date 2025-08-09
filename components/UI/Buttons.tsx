import { Pressable, StyleSheet, Text, View } from "react-native";
import Colours from "../../utils/Colours";
import { Feather  } from "@expo/vector-icons";

export const TimerButton = ({
  expiryTimestamp,
  handlePress,
  type = "main",
}: {
  expiryTimestamp: string;
  handlePress: () => void;
  type?: "main" | "reminder";
}) => {
  return (
    <View>
      <Pressable
        style={[
          styles.timerButton,
          { backgroundColor: type === "main" ? Colours.dark : Colours.light },
        ]}
        onPress={handlePress}
      >
        <Text style={styles.timerText}>{expiryTimestamp}</Text>
      </Pressable>
    </View>
  );
};

type ActionType = "start" | "pause" | "restart";

export const ActionButton = ({
  action,
  handleClick,
  disabled,
  isMeditation,
}: {
  action: ActionType;
  handleClick: () => void;
  disabled?: boolean;
  isMeditation?: boolean;
}) => {
  const getIconName = (): keyof typeof Feather.glyphMap => {
    switch (action) {
      case "start":
        return "play";
      case "pause":
        return "pause";
      case "restart":
        return "refresh-ccw";
      default:
        return "circle";
    }
  };

  const isDisabled = disabled && isMeditation;

  return (
    <Pressable
      onPress={handleClick}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.actionButton,
        // {
        //   backgroundColor: isDisabled
        //     ? Colours.darker
        //     : Colours.dark,
        //   opacity: pressed || isDisabled ? 0.6 : 1,
        // },
      ]}
    >
      <Feather name={getIconName()} size={40} color="white" />
    </Pressable>
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
  },
  timerText: {
    color: "white",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  actionButton:{
    padding: 12,
    borderRadius: 9999,
    marginBottom: 8,
  }
});

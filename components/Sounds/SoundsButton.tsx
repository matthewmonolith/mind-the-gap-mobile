import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colours from "../../utils/Colours";

const SoundsButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.soundsButton}>
      <Pressable onPress={onPress}>
        <Ionicons
          name="musical-notes-outline"
          size={32}
          color={Colours.lightest}
        />
      </Pressable>
    </View>
  );
};
export default SoundsButton;
const styles = StyleSheet.create({
  soundsButton: {
    marginRight: 10,
  },
});

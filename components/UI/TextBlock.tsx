import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

const TextBlock = ({ children }: { children: ReactNode }) => {
  return (
    <View>
      <Text style={styles.textBlock}>{children}</Text>
    </View>
  );
};
export default TextBlock;

const styles = StyleSheet.create({
  textBlock: {
    fontSize: 20,
    color: "white",
  },
});

import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

const SubHeader = ({ children }: { children: ReactNode }) => {
  return (
    <View>
      <Text style={styles.subHeader}>{children}</Text>
    </View>
  );
};
export default SubHeader;
const styles = StyleSheet.create({
  subHeader: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 5,
    color: "white",
  },
});

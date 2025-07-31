import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Colours from "../../utils/Colours";

type ColourKey = keyof typeof Colours;

const Header = ({
  title,
  bgColour,
}: {
  title: string;
  bgColour: ColourKey;
}) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: Colours[bgColour],
          height: width < 500 ? "10%" : "20%",
        },
      ]}
    >
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});

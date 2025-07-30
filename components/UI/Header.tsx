import { StyleSheet, Text, View } from "react-native";
import Colours from "../../utils/Colours";

type ColourKey = keyof typeof Colours;

const Header = ({
  title,
  bgColour,
}: {
  title: string;
  bgColour: ColourKey;
}) => {
  return (
    <View style={[styles.header, { backgroundColor: Colours[bgColour] }]}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    borderRadius: 16,
    width: "80%",
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

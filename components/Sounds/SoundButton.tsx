import { Pressable, StyleSheet, Text, View } from "react-native";
import Colours from "../../utils/Colours";

const SoundButton = ({
  buttonText,
  onPress,
  soundName,
}: {
  buttonText: string;
  onPress: (soundName: string) => void;
  soundName: string;
}) => {
  return (
    // <View style={styles.button}>
      <Pressable
        onPress={() => {
          onPress(soundName);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    // </View>
  );
};
export default SoundButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.lighter,
    padding: 10,
    marginVertical: 5,
    borderRadius: 9999,
    width: '80%'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

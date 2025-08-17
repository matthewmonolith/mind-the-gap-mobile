import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Colours from "../utils/Colours";
import SubHeader from "../components/UI/SubHeader";
import TextBlock from "../components/UI/TextBlock";

const Guide = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.guideScreen}>
      <ScrollView>
        <View
          style={[
            styles.guideContainer,
            width < 500 ? { paddingHorizontal: 24 } : { paddingHorizontal: 50 },
          ]}
        >
          <SubHeader>About</SubHeader>
          <TextBlock>
            Minding Meditator is a simple yet user-friendly app that helps you stay
            focused during meditation. It has gentle reminder sounds that will
            bring your focus back on your breath if your mind starts to wander.
          </TextBlock>
          <SubHeader>Types of Timers</SubHeader>
          <TextBlock>
            There are two timers available for user:{"\n"}
            <Text>
              {"\n"}One for counting timing how long you wish to meditate for.
              {"\n"}
            </Text>
            <Text>
              {"\n"}Has a countdown to repeat a sound each time it ends,
              bringing you return to focus. Can be used with or without the
              meditation timer.
            </Text>
          </TextBlock>
          <SubHeader>Sounds</SubHeader>
          <TextBlock>
            Both timers have their own sounds available. When a timer ends, it
            will play a sound of your choice. To pick your sounds, tap on the
            top right musical note button, then tap on the sound you would like
            to hear for your meditation and reminder timers.
          </TextBlock>
          <SubHeader>How to use</SubHeader>
          <TextBlock>
            Click on the bubble timer to select it. The outer ring shows much
            time is left
          </TextBlock>
          <TextBlock>
            Press the play button to start. Pause button to pause, and restart
            to start over. Both timers can run at the same time
          </TextBlock>
        </View>
      </ScrollView>
    </View>
  );
};
export default Guide;
const styles = StyleSheet.create({
  guideScreen: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    backgroundColor: Colours.light,
  },
  guideContainer: {
    overflow: "hidden",
    paddingVertical: 16,
    marginBottom: 50,
  },
});

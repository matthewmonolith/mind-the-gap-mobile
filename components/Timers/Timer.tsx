import { Pressable, StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useEffect, useState, useContext } from "react";
import { useTimer } from "react-timer-hook";
import { ActionButton } from "../UI/Buttons";
import { useCalculateMaxTime } from "../../utils/hooks/useCalculateMaxTime";
import { newTimeStamp } from "../../utils/Times";
import { SoundContext, PLAY_SOUND } from "../../context/SoundContext";
import Colours from "../../utils/Colours";

const Timer = ({
  timeStamp,
  isMeditation,
}: {
  timeStamp: string;
  isMeditation: boolean;
}) => {
  const expiryTimestamp = newTimeStamp(timeStamp);
  const { dispatch } = useContext(SoundContext);
  const [disabled, setDisabled] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { seconds, minutes, pause, restart, resume } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      if (userInteracted) {
        dispatch({ type: PLAY_SOUND, payload: { isMeditation } });
      } else {
        console.warn("Sound blocked due to missing user interaction.");
      }

      if (!isMeditation) {
        const now = newTimeStamp(timeStamp, true);
        setTimeout(() => restart(now), 1000);
      }
    },
  });

  const maxTime = useCalculateMaxTime(timeStamp);
  const minsToSeconds = minutes * 60 + seconds;
  const currentTimeString = `${String(minutes)}:${String(seconds)}`;

  useEffect(() => {
    setDisabled(minsToSeconds < 1);
  }, [minsToSeconds]);

  const handleUserInteraction = () => {
    setUserInteracted(true);
  };

  const handleRestart = () => {
    const newTime = newTimeStamp(timeStamp);
    restart(newTime, false);
    setIsActive(false);
    handleUserInteraction();
  };

  return (
    <Pressable
      onPress={handleUserInteraction}
      style={styles.pressableContainer}
    >
      <AnimatedCircularProgress
        size={230}
        width={15}
        fill={(minsToSeconds / maxTime) * 100}
        tintColor={isMeditation ? Colours.light : Colours.dark}
        rotation={0}
        lineCap="round"
      >
        {() => (
          <View style={[styles.innerCircle, {backgroundColor: isMeditation ? Colours.dark : Colours.light}]}>
            <Text style={styles.progressText}>{currentTimeString}</Text>
            <View style={styles.progressButton}>
              {!isActive ? (
                <ActionButton
                  action="start"
                  handleClick={() => {
                    resume();
                    handleUserInteraction();
                    setIsActive(true);
                  }}
                  disabled={disabled}
                  isMeditation={isMeditation}
                />
              ) : (
                <ActionButton
                  action="pause"
                  handleClick={() => {
                    pause();
                    handleUserInteraction();
                    setIsActive(false);
                  }}
                  disabled={disabled}
                  isMeditation={isMeditation}
                />
              )}
              <ActionButton action="restart" handleClick={handleRestart} />
            </View>
          </View>
        )}
      </AnimatedCircularProgress>
    </Pressable>
  );
};
export default Timer;
const styles = StyleSheet.create({
  pressableContainer: {
    width: 230,
  },
  progressContainer: {
    display: "flex",
  },
  progressText: {
    color: "#ffffff",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
  progressButton: {
    display: "flex",
    flexDirection: 'row'
  },
  innerCircle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6359B0",
    borderRadius: 9999,
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});

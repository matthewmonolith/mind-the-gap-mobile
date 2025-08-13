export const mainTimes = ["05:00", "10:00", "15:00", "20:00", "30:00"];

export const reminderTimes = ["00:05", "00:30", "01:00", "01:30", "02:00"];

export const newTimeStamp = (timeStamp: string, forReset: boolean = false) => {
  const [minutes, seconds] = timeStamp.split(":").map(Number);
  const now = new Date();
  now.setSeconds(
    now.getSeconds() + minutes * 60 + seconds + (forReset ? 1 : 0)
  );
  return now;
};

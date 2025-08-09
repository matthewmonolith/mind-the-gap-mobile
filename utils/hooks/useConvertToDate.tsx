export function useConvertToDate(timeString: string) {
  const [minutes, seconds] = timeString.split(":").map(Number);
  const now = new Date();
  now.setSeconds(now.getSeconds() + minutes * 60 + seconds);
  return now;
}

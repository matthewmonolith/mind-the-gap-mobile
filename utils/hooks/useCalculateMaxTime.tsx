export function useCalculateMaxTime(time: string) {
  const [minutes, seconds] = time.split(":").map(Number);
  return minutes * 60 + (seconds || 0);
}

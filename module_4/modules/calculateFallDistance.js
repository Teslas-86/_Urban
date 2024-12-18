export function calculateFallDistance(timeInSeconds) {
  const g = 9.8;
  return Math.round(0.5 * g * timeInSeconds ** 2);
}

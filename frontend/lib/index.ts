export function getRandomColorsForPie() {
  const r = Math.floor(Math.random() * 105) + 150;
  const g = Math.floor(Math.random() * 105) + 150;
  const b = Math.floor(Math.random() * 105) + 150;
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
}

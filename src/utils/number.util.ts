export const roundToFixed = (num: number, digits: number = 0) => {
  const assistanceValue = 10 ** digits;
  const roundedNumber = Math.round(num * assistanceValue) / assistanceValue;
  return roundedNumber;
};

export const getPercentage = (num: number, digits: number = 0) => {
  const rounded = roundToFixed(num, digits);
  const limitedRatio = Math.max(0, Math.min(100, rounded));
  return limitedRatio;
};

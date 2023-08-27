export const calculateBarPercentage = (goal: number, raisedAmount: number) => {
  const percentage = Math.round((raisedAmount * 100) / goal);
  return percentage;
};

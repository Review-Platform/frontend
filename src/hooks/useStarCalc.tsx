function useStarCalc() {
  const starCalc = (rating: number) => {
    let filled = Math.floor(rating);
    const decimal = rating - filled;
    let half = 0;
    if (decimal !== 0) {
      if (decimal <= 0.5) {
        half = 1;
      } else filled++;
    }
    const empty = 5 - filled - half;
    const filledArr = new Array(filled).fill(1);
    const halfArr = new Array(half).fill(1);
    const emptyArr = new Array(empty).fill(1);

    return { filledArr, halfArr, emptyArr };
  };
  return { starCalc };
}
export default useStarCalc;

//sort column/cards
export const mapOrder = (originArr, orderArr, key) => {
  const cloneArr = [...originArr];
  const orderedArr = cloneArr.sort((a, b) => {
    return orderArr.indexOf(a[key]) - orderArr.indexOf(b[key]);
  });
  return orderedArr;
};

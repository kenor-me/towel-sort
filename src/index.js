module.exports = function towelSort(matrix) {
  if((matrix === undefined || matrix.length === 0)) return [];
  matrix.forEach((element, index) => index % 2 ? element.reverse() : false);
  return matrix.flat();
}

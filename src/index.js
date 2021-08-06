module.exports = function towelSort(matrix) {
    matrix.forEach((element, index) => index % 2 ? element.reverse() : false);
    return (matrix == undefined || matrix.length == 0) ? [] : matrix.flat();
}

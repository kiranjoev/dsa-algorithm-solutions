/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var arr = [];
  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) {
        arr[i].push(1);
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }
  return arr[m - 1][n - 1];
};

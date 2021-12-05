/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  var i = 2;
  var newArray = [1, 2];
  while (i < n) {
    newArray[i] = newArray[i - 1] + newArray[i - 2];
    i++;
  }
  return newArray[n - 1];
};

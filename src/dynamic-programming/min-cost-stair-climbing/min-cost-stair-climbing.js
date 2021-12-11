/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  var minCostArray = calculateMinCostArray(cost);
  return Math.min(minCostArray[0], minCostArray[1]);
};
var calculateMinCostArray = function (cost) {
  var newArray = [];
  var length = cost.length;
  var last = cost[length - 1];
  var secondLast = cost[length - 2];
  var i = length - 3;
  newArray[length - 1] = last;
  newArray[length - 2] = secondLast;
  while (i >= 0) {
    newArray[i] = cost[i] + Math.min(last, secondLast);
    secondLast = newArray[i];
    last = newArray[i + 1];
    i--;
  }
  return newArray;
};

/**
 * Linear Time - O(n)
 * Linear space - O(n)
 */

(function () {
  var maxSubArray = function (nums) {
    var newArray = [nums[0]],
      sum;
    for (let i = 1; i < nums.length; i++) {
      newArray[i] = Math.max(nums[i], newArray[i - 1] + nums[i]);
    }
    sum = newArray[0];
    for (let j = 1; j < newArray.length; j++) {
      sum = Math.max(sum, newArray[j]);
    }
    return sum;
  };
})();

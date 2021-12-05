/**
 * Linear Time - O(n)
 * Constant space - O(1)
 */

(function () {
  var maxSubArray = function (nums) {
    var maxEndingHere = nums[0],
      maxSoFar = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
  };
})();

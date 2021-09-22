"use strict";
(function () {
    function sortedSquares(nums) {
        var a = [], start = 0, end = nums.length - 1, index = end, firstValue = nums[start] * nums[start], secondValue = nums[end] * nums[end];
        while (start <= end) {
            if (firstValue < secondValue) {
                a[index] = secondValue;
                end--;
                secondValue = nums[end] * nums[end];
            }
            else {
                a[index] = firstValue;
                start++;
                firstValue = nums[start] * nums[start];
            }
            index--;
        }
        return a;
    }
    console.log(sortedSquares([-4, -1, 0, 3, 10]));
    console.log(sortedSquares([-7, -3, 2, 3, 11]));
})();
//# sourceMappingURL=sorted-squares.js.map
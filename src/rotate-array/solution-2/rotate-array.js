"use strict";
(function () {
    function rotate(nums, k) {
        if (nums.length !== 1) {
            if (k > nums.length) {
                k = k % nums.length;
            }
            reverse(nums, 0, nums.length - 1);
            reverse(nums, 0, k - 1);
            reverse(nums, k, nums.length - 1);
        }
    }
    function reverse(nums, start, end) {
        var temp;
        while (start < end) {
            temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
})();
//# sourceMappingURL=rotate-array.js.map
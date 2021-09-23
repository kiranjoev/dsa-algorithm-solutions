"use strict";
(function () {
    function moveZeroes(nums) {
        var j = 0, temp;
        for (var i = 1; i < nums.length; i++) {
            if (nums[j] != 0)
                j++;
            else {
                if (nums[i] != 0) {
                    temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                    j++;
                }
            }
        }
        console.log(nums);
    }
    moveZeroes([0, 1, 0, 3, 12]);
    moveZeroes([0]);
    moveZeroes([1, 2, 0, 0, 4]);
    moveZeroes([0, 0, 3]);
})();
//# sourceMappingURL=move-zeros.js.map
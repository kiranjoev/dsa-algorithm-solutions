"use strict";
(function () {
    var search = function (nums, target) {
        var length = nums.length;
        for (var i = 0; i < length - 1; i++) {
            if (nums[i] === target) {
                return i;
            }
        }
        return -1;
    };
    console.log(search([-1, 0, 3, 5, 9, 12], 3));
    console.log(search([-1, 0, 3, 5, 9, 12], 2));
    console.log(search([5], 5));
    console.log(search([5], 0));
});
//# sourceMappingURL=binary-search.js.map
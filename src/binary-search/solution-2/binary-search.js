"use strict";
(function () {
    var search = function (nums, target) {
        var length = nums.length;
        var i = 0, j = length - 1;
        var isEven = length % 2 === 0;
        if (isEven) {
            while (1) {
                if (nums[i] === target) {
                    return i;
                }
                else if (nums[j] === target) {
                    return j;
                }
                if (j === i + 1) {
                    break;
                }
                if (i === j) {
                    break;
                }
                i++;
                j--;
            }
        }
        else {
            while (1) {
                if (nums[i] === target) {
                    return i;
                }
                else if (nums[j] === target) {
                    return j;
                }
                if (i === j) {
                    break;
                }
                i++;
                j--;
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
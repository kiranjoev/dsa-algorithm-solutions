"use strict";
(function () {
    var search = function (nums, target) {
        var end = nums.length;
        var start = 0, mid;
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (nums[mid] === target)
                return mid;
            else if (nums[mid] < target)
                start = mid + 1;
            else
                end = mid - 1;
        }
        return -1;
    };
    console.log(search([-1, 0, 3, 5, 9, 12], 3));
    console.log(search([-1, 0, 3, 5, 9, 12], 2));
    console.log(search([5], 5));
    console.log(search([5], 0));
});
(function () {
    var recursiveFun = function (nums, start, end, target) {
        if (start > end)
            return -1;
        var mid = Math.floor((start + end) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] < target)
            return recursiveFun(nums, mid + 1, end, target);
        else
            return recursiveFun(nums, start, mid - 1, target);
    };
    var search = function (nums, target) {
        return recursiveFun(nums, 0, nums.length, target);
    };
    console.log(search([-1, 0, 3, 5, 9, 12], 3));
    console.log(search([-1, 0, 3, 5, 9, 12], 2));
    console.log(search([5], 5));
    console.log(search([5], 0));
});
//# sourceMappingURL=binary-search.js.map
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
(function () {
    function rotate(nums, k) {
        var a = __spreadArray([], nums, true);
        var length = a.length;
        if (length !== 1) {
            if (k > length) {
                k = k % length;
            }
            var j = a.length - k;
            for (var i = 0; i < a.length; i++) {
                if (j == a.length)
                    j = 0;
                nums[i] = a[j];
                j++;
            }
        }
    }
})();
//# sourceMappingURL=rotate-array.js.map
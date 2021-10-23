"use strict";
var solution = function (isBadVersion) {
    return function (n) {
        var start = 1, mid;
        while (start <= n) {
            mid = Math.round((start + n) / 2);
            if (isBadVersion(mid)) {
                n = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return n + 1;
    };
};
//# sourceMappingURL=first-bad-version.js.map
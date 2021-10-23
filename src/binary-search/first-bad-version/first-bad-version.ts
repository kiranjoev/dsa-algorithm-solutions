var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 1,
      mid;
    while (start <= n) {
      mid = Math.round((start + n) / 2);
      if (isBadVersion(mid)) {
        n = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return n + 1;
  };
};

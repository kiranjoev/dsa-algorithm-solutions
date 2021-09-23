(function () {
  function rotate(nums: number[], k: number): void {
    if (nums.length !== 1) {
      if (k > nums.length) {
        k = k % nums.length;
      }
      reverse(nums, 0, nums.length - 1);
      reverse(nums, 0, k - 1);
      reverse(nums, k, nums.length - 1);
    }
  }
  function reverse(nums: number[], start: number, end: number) {
    let temp;
    while (start < end) {
      temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
})();

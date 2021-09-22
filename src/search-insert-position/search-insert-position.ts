function searchInsert(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1,
    mid;
  if (nums[start] > target) return 0;
  else if (nums[end] < target) return end + 1;
  else {
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) start = mid + 1;
      else end = mid - 1;
    }
    return end + 1;
  }
}

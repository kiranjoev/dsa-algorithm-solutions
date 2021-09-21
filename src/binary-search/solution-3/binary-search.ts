(function () {
  let search = (nums: number[], target: number): number => {
    let end = nums.length;
    let start = 0,
      mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) start = mid + 1;
      else end = mid - 1;
    }
    return -1;
  };
  console.log(search([-1, 0, 3, 5, 9, 12], 3));
  console.log(search([-1, 0, 3, 5, 9, 12], 2));
  console.log(search([5], 5));
  console.log(search([5], 0));
});

(function () {
  let recursiveFun = (
    nums: number[],
    start: number,
    end: number,
    target: number
  ): number => {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target)
      return recursiveFun(nums, mid + 1, end, target);
    else return recursiveFun(nums, start, mid - 1, target);
  };
  let search = (nums: number[], target: number): number => {
    return recursiveFun(nums, 0, nums.length, target);
  };
  console.log(search([-1, 0, 3, 5, 9, 12], 3));
  console.log(search([-1, 0, 3, 5, 9, 12], 2));
  console.log(search([5], 5));
  console.log(search([5], 0));
});

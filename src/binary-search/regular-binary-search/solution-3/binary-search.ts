/**
 * * * * * * * * * * * * * *
 * Binary Search           *
 * * * * * * * * * * * * * *
 *
 * Binary search implementation belongs to the Divide-and-Conquer algorithmic approach
 *
 * Approach:
 * The check is made to see if the middle element of the array is the target element.
 * Otherwise, if the middle element is lesser than the target element then the target element should be in the portion from the middle element to the end of the array
 * Similarly, if the middle element is greater than the target element then the target element should be in the first portion
 * This process of dividing the given portion and checking continue until the element is found or the array limits are reached.
 *
 * Points to note:
 *  1. The input array should be sorted for this approach to work.
 *  2. The mid point calculation requires the use of Math.floor operator in JS
 *
 * Interesting Fact:
 * There was a flaw in the age old practice of calculation of the mid-point of the array using the formula
 *  mid = (start + end)/2
 * If the calculation of (start + end) causes an overflow for the maximum safe integer value in the language being used(for JS it is 2^53-1), then the algorithm breaks.
 * To solve this the formula should be
 * mid = (start + (end-start)/2)
 *
 * Time Complexity
 *
 * Best case scenario - O(1)
 * When the element to be found is the middle element
 *
 * Worst case scenario - O(logn)
 * length of array changes in each iteration as
 * 1st - n/2
 * 2nd - (n/2)/2 => (n/2^2)
 * kth - (n/2^k) => by nth iteration the length would be 1
 *     => (n/2^k) = 1
 *     => logn = klog2
 *     => k = logn
 */

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

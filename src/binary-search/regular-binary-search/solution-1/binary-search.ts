/**
 * * * * * * * * *
 * Linear search *
 * * * * * * * * *
 * 
 * Traverse the length of the array from the start and return once the element is found
 * 
 * Time Complexity
 * 
 * Best case analysis - O(1)
 * When the element to be found is the first element of the array
 * 
 * Worst case analysis - O(n)
 * When the element to be found is the last element of the array or if the element is not present in the array
 */

(function () {
  let search = (nums: number[], target: number): number => {
    let length = nums.length;
    for (let i = 0; i < length - 1; i++) {
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

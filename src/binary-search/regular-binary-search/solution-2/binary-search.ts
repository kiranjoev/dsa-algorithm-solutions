/**
 * * * * * * * * * * * * * * 
 * Linear Search modified  *
 * * * * * * * * * * * * * *
 * 
 * Use two pointers 
 *  - one from start and incremented
 *  - second from end and decremented
 * 
 * Time Complexity
 * 
 * Best case scenario - O(1)
 * When the element to be found is either first or last element
 * 
 * Worst case scenario - O(n/2)
 * Since there are two pointers, the array is traversed in half the time
 * And if the element is the middle element or if the element is not present in array, it takes only half the time
 */

(function () {
  let search = (nums: number[], target: number): number => {
    let length = nums.length;
    let i = 0,
      j = length - 1;
    const isEven = length % 2 === 0;
    if (isEven) {
      while (1) {
        if (nums[i] === target) {
          return i;
        } else if (nums[j] === target) {
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
    } else {
      while (1) {
        if (nums[i] === target) {
          return i;
        } else if (nums[j] === target) {
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

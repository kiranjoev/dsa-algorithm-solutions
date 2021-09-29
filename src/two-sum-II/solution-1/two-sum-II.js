(function () {
  var twoSum = function (numbers, target) {
    let i = 0,
      length = numbers.length,
      secondTarget,
      secondTargetIndex;
    while (i < length) {
      secondTarget = target - numbers[i];
      secondTargetIndex = binarySearch(numbers, secondTarget, i + 1, length);
      if (secondTargetIndex > 0) {
        return [i + 1, secondTargetIndex + 1];
      }
      i++;
    }
  };
  function binarySearch(nums, target, first, last) {
    let mid;
    while (first <= last) {
      mid = Math.floor((first + last) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) first = mid + 1;
      else last = mid - 1;
    }
    return -1;
  }

  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([0, 0, 11, 15], 0));
})();

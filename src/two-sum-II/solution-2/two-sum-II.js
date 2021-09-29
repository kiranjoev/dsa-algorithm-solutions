(function () {
  var twoSum = function (numbers, target) {
    let start = 0,
      end = numbers.length - 1;
    while (start <= end) {
      if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
      else if (numbers[start] + numbers[end] > target) end--;
      else start++;
    }
    return [-1, -1];
  };

  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([2, 3, 4], 6));
  console.log(twoSum([-1, 0], 0));
  console.log(twoSum([0, 0, 11, 15], 0));
})();

(function () {
  function moveZeroes(nums: number[]): void {
    let j = 0,
      temp;
    for (let i = 1; i < nums.length; i++) {
      if (nums[j] != 0) j++;
      else {
        if (nums[i] != 0) {
          temp = nums[j];
          nums[j] = nums[i];
          nums[i] = temp;
          j++
        }
      }
    }
    console.log(nums);
  }
  moveZeroes([0,1,0,3,12]);
  moveZeroes([0]);
  moveZeroes([1,2,0,0,4]);
  moveZeroes([0,0,3]);
})();

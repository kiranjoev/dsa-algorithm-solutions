(function () {
  function rotate(nums: number[], k: number): void {
    let a = [...nums];
    let length = a.length;
    if (length !== 1) {
      if (k > length) {
        k = k % length;
      }
      let j = a.length - k;
      for (let i = 0; i < a.length; i++) {
        if (j == a.length) j = 0;
        nums[i] = a[j];
        j++;
      }
    }
  }
})();

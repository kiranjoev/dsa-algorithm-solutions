(function () {
  /**
   * @param {string} s
   * @return {number}
   */
  var lengthOfLongestSubstring = function (s) {
    let left = 0,
      right = 0,
      substringSet = new Set(),
      maxCount = 0;
    while (right < s.length) {
        while (substringSet.has(s[right])) {
        substringSet.delete(s[left]);
        left++;
      }
      substringSet.add(s[right]);
      right++;
      maxCount = Math.max(substringSet.size, maxCount);
    }
    return maxCount;
  };
  console.log(lengthOfLongestSubstring("abcabcbb"));
  console.log(lengthOfLongestSubstring("bbbbb"));
  console.log(lengthOfLongestSubstring("pwwkew"));
  console.log(lengthOfLongestSubstring(""));
  console.log(lengthOfLongestSubstring("qrsvbspk"));
})();

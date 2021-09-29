(function () {
  var reverseWords = function (s) {
    s = s.split("");
    let arrayPointer = 0,
      wordPointer = 0;
    while (arrayPointer <= s.length) {
      if (s[arrayPointer] == " " || arrayPointer == s.length) {
        reverseString(s, wordPointer, arrayPointer - 1);
        wordPointer = arrayPointer + 1;
      }
      arrayPointer++;
    }
    return s.join("");
  };
  var reverseString = function (str, start, end) {
    let temp;
    while (start < end) {
      temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  };
  console.log(reverseWords("Let's take LeetCode contest"));
})();

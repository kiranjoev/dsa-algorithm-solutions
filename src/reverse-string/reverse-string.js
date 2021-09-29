(function () {
  var reverseString = function (s) {
    let start = 0,
      end = s.length - 1,
      temp;
    while (start < end) {
      temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
    }
    console.log(s);
  };
  reverseString(["h","e","l","l","o"]);
})();

(function () {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    let sourceHashMap = [],
      windowHashMap = [];
    let start = 0,
      end = 0;
    for (let i = 0; i < 26; i++) {
      sourceHashMap[i] = 0;
      windowHashMap[i] = 0;
    }
    while (end < s1.length) {
      sourceHashMap[s1.charCodeAt(end) - 97]++;
      windowHashMap[s2.charCodeAt(end) - 97]++;
      end++;
    }
    if (compareArrays(sourceHashMap, windowHashMap)) {
      return true;
    } else {
      while (end < s2.length) {
        windowHashMap[s2.charCodeAt(end) - 97]++;
        windowHashMap[s2.charCodeAt(start) - 97]--;
        start++;
        end++;
        if (compareArrays(sourceHashMap, windowHashMap)) return true;
      }
      return false;
    }
  };
  var compareArrays = function (arr1, arr2) {
    return arr1.every((element, index) => (element == arr2[index]));
  };
  console.log(checkInclusion("ab", "eidbaooo"));
  console.log(checkInclusion("ab", "eidboaoo"));
  console.log(checkInclusion("adc", "dcda"));
})();

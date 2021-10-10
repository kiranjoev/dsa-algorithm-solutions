(function () {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    let sourceHashMap = new Map();
    let windowHashMap = new Map();
    let start = 0,
      end = 0;
    while (end < s1.length) {
      if (sourceHashMap.has(s1[end])) {
        sourceHashMap.set(s1[end], sourceHashMap.get(s1[end]) + 1);
      } else {
        sourceHashMap.set(s1[end], 1);
      }
      if (windowHashMap.has(s2[end])) {
        windowHashMap.set(s2[end], windowHashMap.get(s2[end]) + 1);
      } else {
        windowHashMap.set(s2[end], 1);
      }
      end++;
    }
    if (compareHashMaps(sourceHashMap, windowHashMap)) {
      return true;
    } else {
      while (end <= s2.length) {
        if (windowHashMap.has(s2[end])) {
          windowHashMap.set(s2[end], windowHashMap.get(s2[end]) + 1);
        } else {
          windowHashMap.set(s2[end], 1);
        }
        windowHashMap.set(s2[start], windowHashMap.get(s2[start]) - 1);
        start++;
        end++;
        if (compareHashMaps(sourceHashMap, windowHashMap)) {
          return true;
        }
      }
      return false;
    }
  };
  var compareHashMaps = function (map1, map2) {
    var testVal;
    for (var [key, val] of map1) {
      testVal = map2.get(key);
      if (testVal !== val || (testVal === undefined && !map2.has(key))) {
        return false;
      }
    }
    return true;
  };
    console.log(checkInclusion("ab", "eidbaooo"));
    console.log(checkInclusion("ab", "eidboaoo"));
  console.log(checkInclusion("adc", "dcda"));
})();

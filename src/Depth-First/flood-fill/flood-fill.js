(function () {
  var floodFill = function (image, sr, sc, newColor) {
    return fillColor(image, sr, sc, newColor, image[sr][sc]);
  };
  var fillColor = function (image, i, j, newClr, prevClr) {
    if (i < 0 || j < 0) return image;
    if (i > image.length - 1) return image;
    if (j > image[i].length - 1) return image;
    if (image[i][j] != prevClr || image[i][j] == newClr) return image;
    image[i][j] = newClr;
    fillColor(image, i - 1, j, newClr, prevClr);
    fillColor(image, i + 1, j, newClr, prevClr);
    fillColor(image, i, j - 1, newClr, prevClr);
    fillColor(image, i, j + 1, newClr, prevClr);
    return image;
  };
  console.log(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    )
  );
  console.log(
    floodFill(
      [
        [1, 1, 1, 2],
        [1, 1, 0, 1],
        [2, 0, 1, 1],
        [1, 0, 1, 0],
      ],
      1,
      1,
      2
    )
  );
})();

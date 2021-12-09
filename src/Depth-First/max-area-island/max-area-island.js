(function () {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        maxArea = Math.max(maxArea, floodFill(grid, i, j));
      }
    }
    return maxArea;
  };
  var floodFill = function (grid, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      grid[i][j] == 0
    )
      return 0;
    grid[i][j] = 0;
    return (
      1 +
      floodFill(grid, i - 1, j) +
      floodFill(grid, i + 1, j) +
      floodFill(grid, i, j - 1) +
      floodFill(grid, i, j + 1)
    );
  };
  console.log(
    maxAreaOfIsland([
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ])
  );
  console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
})();

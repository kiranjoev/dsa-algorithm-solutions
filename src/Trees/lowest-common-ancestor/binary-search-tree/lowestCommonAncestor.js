(function () {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */

  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  var lowestCommonAncestor = function (root, p, q) {
    var pPathArray = getPathArray(root, p, []);
    var qPathArray = getPathArray(root, q, []);
    var i = 0;
    var lca = root.val;
    while (i < pPathArray.length && i < qPathArray.length) {
      if (pPathArray[i].val === qPathArray[i].val) {
        lca = pPathArray[i];
      } else {
        break;
      }
      i++;
    }
    return lca;
  };

  var getPathArray = function (root, num, arr) {
    arr.push(root);
    if (num.val < root.val) getPathArray(root.left, num, arr);
    if (num.val > root.val) getPathArray(root.right, num, arr);
    return arr;
  };
})();

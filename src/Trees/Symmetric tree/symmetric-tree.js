(function () {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  var isSymmetric = function (root) {
    return root === null || checkForSymmetry(root.left, root.right);
  };
  var checkForSymmetry = function (left, right) {
    if (left === null && right === null) return true;
    else if (left !== null && right !== null) {
      return (
        left.val === right.val &&
        checkForSymmetry(left.left, right.right) &&
        checkForSymmetry(left.right, right.left)
      );
    } else return false;
  };

  isSymmetric([1, 2, 2, 3, 4, 4, 3]); //true
  isSymmetric([1, 2, 2, null, 3, null, 3]); //false
})();

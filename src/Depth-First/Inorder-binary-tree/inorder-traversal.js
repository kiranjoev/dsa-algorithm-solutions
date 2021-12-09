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
   * @return {number[]}
   */
  var inorderTraversal = function (root) {
    return traverseInOrder(root, []) || [];
  };
  var traverseInOrder = function (root, arr) {
    if (root) {
      if (root.left) traverseInOrder(root.left, arr);
      arr.push(root.val);
      if (root.right) traverseInOrder(root.right, arr);
      return arr;
    }
  };
})();

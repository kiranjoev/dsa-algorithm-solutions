(function () {
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var middleNode = function (head) {
    let result = [head];
    while (head.next != null) {
      head = head.next;
      result.push(head);
    }
    return result[Math.floor(result.length / 2)];
  };
})();

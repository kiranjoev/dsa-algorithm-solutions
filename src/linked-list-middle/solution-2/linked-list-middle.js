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
    let head2 = head;
    while (head2 && head2.next != null) {
      head = head.next;
      head2 = head2.next.next;
    }
    return head;
  };
})();

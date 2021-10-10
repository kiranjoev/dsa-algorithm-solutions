/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next == null) return null;
  let arr = [head];
  while (head.next != null) {
    head = head.next;
    arr.push(head);
  }
  let parent = arr[arr.length - n - 1];
  if (!!parent?.next) {
    parent.next = arr[arr.length - n + 1] ?? null;
    return arr[0];
  } else {
    return arr[1];
  }
};

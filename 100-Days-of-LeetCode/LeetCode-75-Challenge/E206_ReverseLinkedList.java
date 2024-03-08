public class E206_ReverseLinkedList {
  public static void main(String[] args) {
    
    ListNode t1 = new ListNode(1 , new ListNode(2 , new ListNode(3 , new ListNode(4 , new ListNode(5))))); // [1 , 2 , 3 , 4 , 5]
    printList(t1); // 1 -> 2 -> 3 -> 4 -> 5 -> null
    ListNode r1 = reverseList(t1); // [5 , 4 , 3 , 2 , 1]
    printList(r1); // 5 -> 4 -> 3 -> 2 -> 1 -> null
  }

  public static ListNode reverseList(ListNode head) {
    ListNode prev = null;

    while (head != null) {
      ListNode next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }

  public static void printList(ListNode head) {
    ListNode curr = head;
    while (curr != null) {
      System.out.print(curr.val + " -> ");
      curr = curr.next;
    }
    System.out.println("null");
  } 
}

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

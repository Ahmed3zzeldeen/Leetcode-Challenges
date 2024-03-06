
/**
 * E2095_DeleteTheMiddleNodeofaLinkedList
 */
public class M2095_DeleteTheMiddleNodeofaLinkedList {

  public static void main(String[] args) {
    ListNode head = new ListNode(1);

    ListNode headMid1 = deleteMiddle(head); // []
    ListNode headMid2 = new ListNode(1 , new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))); // [1, 2, 4, 5]
    ListNode headMid3 = new ListNode(1 , new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5 , new ListNode(6)))))); // [1, 2, 3, 5, 6]
  
    printList(headMid1); // null
    printList(headMid2); // 1 -> 2 -> 3 -> 4 -> 5 -> null
    printList(headMid3); // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
  
  }

  public static void printList(ListNode head) {
    ListNode curr = head;
    while (curr != null) {
      System.out.print(curr.val + " -> ");
      curr = curr.next;
    }
    System.out.println("null");
  } 

  public static ListNode deleteMiddle(ListNode head) {
    ListNode curr = head; 
    int count = 0;
    if (curr == null || curr.next == null) return null;
    while (curr != null && curr.next != null) {
      count++;
      curr = curr.next;
    }
    int middle = (count + 1) / 2;
    curr = head;
    for (int i = 0; i < middle-1 ; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    
    return head;
  }
}


class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}
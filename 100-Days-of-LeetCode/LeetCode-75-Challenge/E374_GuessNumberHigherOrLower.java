
public class E374_GuessNumberHigherOrLower {
  
  static int pick = 6;
  public static void main(String[] args) {
    System.out.println(guessNumber(10)); // 6
    // pick 1
    pick = 1;
    System.out.println(guessNumber(1)); // 1
    pick = 1;
    System.out.println(guessNumber(2)); // 1
  }


  public static int guess(int num) {
    if (num > pick) {
      return -1;
    } else if (num < pick) {
      return 1;
    } else {
      return 0;
    }
  }

  public static int guessNumber(int n) {
    int start = 1, end = n;
    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (guess(mid) == 0) {
        return mid;
      } else if (guess(mid) == 1) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
}
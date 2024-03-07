import java.util.Stack;

/**
 * M2390_RemovingStarsFromaString
 */
public class M2390_RemovingStarsFromaString {

  public static void main(String[] args) {
    System.out.println(removeStars("leet**cod*e")); // "lecoe"
    System.out.println(removeStars("erase*****")); // ""
  }

  public static String removeStars(String s) {
    Stack<String> st = new Stack<String>();

    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) != '*') {
        st.push(s.charAt(i)+"");
      } else if (!st.empty() && s.charAt(i) == '*') {
        st.pop();
      }
    }
    String res = "";
    while (!st.empty()) {
      res = st.pop() + res;
    }
    return res;
  }

}
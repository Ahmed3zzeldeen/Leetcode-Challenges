class Solution {
    public String mergeAlternately(String word1, String word2) {
        String res = "";
        
        if (word1.length() > word2.length()) {
          for (int i = 0; i < word1.length(); i++) {
            res += word1.charAt(i);
            if (i < word2.length()) {
              res += word2.charAt(i);
            }
          }
        } else if (word1.length() < word2.length()) {
          for (int i = 0; i < word2.length(); i++) {
            if (i < word1.length()) {
              res += word1.charAt(i);
            }
            res += word2.charAt(i);
          }
        } else {
          for (int i = 0; i < word1.length(); i++) {
            res += word1.charAt(i);
            res += word2.charAt(i);
          }
        }
        return res;
    }
}
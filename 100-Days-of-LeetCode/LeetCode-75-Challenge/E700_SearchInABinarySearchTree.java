/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */

public class E700_SearchInABinarySearchTree {
  public static void main(String[] args) {
    
  }
}

class Solution {
  public TreeNode searchBST(TreeNode root, int val) {
    if (root.val == val) {
      return root;
    } else if (root.val > val && root.left != null) {
      return searchBST(root.left, val);
    } else if (root.val < val && root.right != null) {
      return searchBST(root.right, val);
    } else {
      return null;
    }
  }
}

class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode() {
  }

  TreeNode(int val) {
    this.val = val;
  }

  TreeNode(int val, TreeNode left, TreeNode right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
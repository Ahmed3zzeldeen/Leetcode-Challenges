import java.util.Arrays;

class Solution {
  public int uniquePaths(int m, int n) {
      int dp[][]=new int[m][n];
      for(int a[]:dp)
      {
          Arrays.fill(a,1);
      }
      dp[0][0]=1;
      for(int i=0;i<m;i++)
      {
          for(int j=0;j<n;j++)
          {
              if(i>0 && j>0)
              {
                  dp[i][j]=dp[i][j-1]+dp[i-1][j];
              }
          }
      }
      return dp[m-1][n-1];
  }
}

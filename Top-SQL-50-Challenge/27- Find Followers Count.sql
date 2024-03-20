/* Write your PL/SQL query statement below */
SELECT
  DISTINCT(USER_ID) user_id,
  COUNT(FOLLOWER_ID) followers_count
FROM
  FOLLOWERS
GROUP BY
  USER_ID
ORDER BY
  USER_ID;
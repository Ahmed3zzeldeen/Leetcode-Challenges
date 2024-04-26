/* Write your PL/SQL query statement below */
SELECT
  USER_ID,
  NAME,
  MAIL
FROM
  USERS
WHERE
  REGEXP_LIKE(MAIL, '^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
  AND MAIL LIKE '%@leetcode.com';
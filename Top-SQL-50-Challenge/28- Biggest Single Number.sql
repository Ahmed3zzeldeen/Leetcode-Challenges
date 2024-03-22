/* Write your PL/SQL query statement below */
SELECT
  MAX(NUM) NUM
FROM
  (
    SELECT
      NUM
    FROM
      MYNUMBERS
    GROUP BY
      NUM
    HAVING
      COUNT(NUM) = 1
  );
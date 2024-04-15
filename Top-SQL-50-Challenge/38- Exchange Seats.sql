/* Write your PL/SQL query statement below */
SELECT
  CASE
    WHEN MOD(ID, 2) = 0 THEN
      LAG(ID, 1) OVER (ORDER BY ID)
    ELSE
      LEAD(ID, 1, ID) OVER (ORDER BY ID)
  END     AS ID,
  STUDENT
FROM
  SEAT
ORDER BY
  ID;
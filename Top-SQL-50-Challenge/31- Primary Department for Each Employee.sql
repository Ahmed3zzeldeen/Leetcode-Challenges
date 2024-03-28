/* Write your PL/SQL query statement below */
SELECT
  EMPLOYEE_ID,
  DEPARTMENT_ID
FROM
  EMPLOYEE
WHERE
  PRIMARY_FLAG = 'Y'
  OR ( EMPLOYEE_ID IN (
    SELECT
      EMPLOYEE_ID
    FROM
      EMPLOYEE
    GROUP BY
      EMPLOYEE_ID
    HAVING
      COUNT(EMPLOYEE_ID) = 1
  ) )
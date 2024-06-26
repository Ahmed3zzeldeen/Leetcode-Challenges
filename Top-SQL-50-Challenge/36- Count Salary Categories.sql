/* Write your PL/SQL query statement below */
SELECT
  'Low Salary'     AS CATEGORY,
  COUNT(*)         AS ACCOUNTS_COUNT
FROM
  ACCOUNTS
WHERE
  INCOME <20000
UNION
SELECT
  'Average Salary' AS CATEGORY,
  COUNT(*)         AS ACCOUNTS_COUNT
FROM
  ACCOUNTS
WHERE
  INCOME >=20000
  AND INCOME <=50000
UNION
SELECT
  'High Salary'    AS CATEGORY,
  COUNT(*)         AS ACCOUNTS_COUNT
FROM
  ACCOUNTS
WHERE
  INCOME >50000;
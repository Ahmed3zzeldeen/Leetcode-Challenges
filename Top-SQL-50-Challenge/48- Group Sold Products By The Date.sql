/* Write your PL/SQL query statement below */
SELECT
  TO_CHAR(A.SELL_DATE, 'YYYY-MM-DD')                        AS SELL_DATE,
  COUNT(DISTINCT A.PRODUCT)                                 AS NUM_SOLD,
  LISTAGG(A.PRODUCT, ',') WITHIN GROUP (ORDER BY A.PRODUCT) AS PRODUCTS
FROM
  (
    SELECT
      DISTINCT *
    FROM
      ACTIVITIES
  ) A
GROUP BY
  A.SELL_DATE
ORDER BY
  A.SELL_DATE;
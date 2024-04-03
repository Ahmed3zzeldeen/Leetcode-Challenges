/* Write your PL/SQL query statement below */
SELECT
  DISTINCT A.PRODUCT_ID,
  COALESCE(B.NEW_PRICE, 10) AS PRICE
FROM
  PRODUCTS A
  LEFT JOIN (
    SELECT
      PRODUCT_ID,
      RANK() OVER(PARTITION BY PRODUCT_ID ORDER BY CHANGE_DATE DESC) AS XRANK,
      NEW_PRICE
    FROM
      PRODUCTS
    WHERE
      CHANGE_DATE <= DATE '2019-08-16'
  ) B
  ON A.PRODUCT_ID = B.PRODUCT_ID
  AND B.XRANK = 1
ORDER BY
  PRICE DESC;
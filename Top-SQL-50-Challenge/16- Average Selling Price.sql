/* Write your PL/SQL query statement below */
SELECT P.product_id, NVL(ROUND(SUM(P.price * U.units) / NULLIF(SUM(U.units), 0), 2), 0) AS average_price
FROM Prices P
LEFT JOIN UnitsSold U ON P.product_id = U.product_id AND U.purchase_date BETWEEN start_date AND end_date
GROUP BY P.product_id;

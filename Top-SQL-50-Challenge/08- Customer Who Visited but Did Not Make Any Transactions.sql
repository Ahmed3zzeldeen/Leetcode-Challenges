/* Write your PL/SQL query statement below */
select V.customer_id , COUNT(CASE WHEN T.transaction_id IS NULL THEN 1 ELSE NULL END) AS count_no_trans
from Visits V left join Transactions T
on V.visit_id = T.visit_id
where T.transaction_id is null
group by V.customer_id;
/* Write your PL/SQL query statement below */
Select round((sum(case when order_date = customer_pref_delivery_date then 1 else 0 end)/count(DISTINCT customer_id))*100, 2) as immediate_percentage
From Delivery
where (customer_id, order_date) in (Select customer_id, min(order_date) as order_date
                                    From Delivery
                                    Group by customer_id
                                    );
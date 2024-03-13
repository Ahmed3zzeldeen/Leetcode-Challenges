/* Write your PL/SQL query statement below */
select R.contest_id , 
Round(COUNT(R.contest_id) * 100 / 
(select COUNT(*) from Users), 2 ) percentage 
from Register R
group by contest_id
order by percentage desc , contest_id;
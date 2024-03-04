/* Write your PL/SQL query statement below */
select A.machine_id , 
  round(
    (select avg(A1.timestamp) from Activity A1 where A1.activity_type = 'end' and A1.machine_id = A.machine_id)
    -
    (select avg(A2.timestamp) from Activity A2 where A2.activity_type = 'start'  and A2.machine_id = A.machine_id) 
    ,3
  ) as processing_time
from Activity A
group by A.machine_id;

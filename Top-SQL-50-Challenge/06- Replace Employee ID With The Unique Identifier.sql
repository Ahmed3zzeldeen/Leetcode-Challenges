/* Write your PL/SQL query statement below */
select EU.unique_id as "unique_id" , E.name
from Employees as E 
left join EmployeeUNI as EU
on E.id = EU.id
where E.id = EU.id or EU.unique_id is null;
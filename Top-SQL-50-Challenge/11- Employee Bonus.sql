/* Write your PL/SQL query statement below */
select Emp.name, Bo.bonus
from  Employee Emp
left outer join Bonus Bo
on Emp.empId = Bo.empId
where Bo.bonus < 1000 or Bo.bonus is null;
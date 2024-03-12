/* Write your PL/SQL query statement below */
select Dep.name As Department, Emp.name As Employee, Emp.Salary As Salary
from Employee Emp
join Department Dep
on Emp.DepartmentId = Dep.Id
where ( 
        select count(distinct Salary) 
        from Employee 
        where DepartmentId = Dep.Id and Salary > Emp.Salary
      ) < 3
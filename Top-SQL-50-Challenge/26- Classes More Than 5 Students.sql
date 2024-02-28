/* Write your PL/SQL query statement below */
select class from Courses
group by class
having COUNT(student) >= 5;

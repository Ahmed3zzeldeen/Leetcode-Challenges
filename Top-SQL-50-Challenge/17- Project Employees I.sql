/* Write your PL/SQL query statement below */
SELECT P.project_id , ROUND(AVG(E.experience_years), 2) AS average_years
FROM Project P
INNER JOIN Employee E 
on E.employee_id = P.employee_id 
GROUP BY project_id;
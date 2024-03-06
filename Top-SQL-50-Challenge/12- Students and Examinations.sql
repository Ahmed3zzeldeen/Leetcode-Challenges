/* Write your PL/SQL query statement below */
SELECT s.student_id , s.student_name , sub.subject_name , COUNT(ex.subject_name) AS attended_exams
FROM Students s
CROSS JOIN Subjects sub
LEFT OUTER JOIN Examinations ex
ON ex.student_id = s.student_id AND
sub.subject_name = ex.subject_name
GROUP BY s.student_id , s.student_name , sub.subject_name
ORDER BY s.student_id , sub.subject_name;
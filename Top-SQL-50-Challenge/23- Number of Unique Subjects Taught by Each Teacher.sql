/* Write your PL/SQL query statement below */
Select distinct(teacher_id), count(distinct(subject_id)) as cnt
From Teacher
Group by teacher_id;
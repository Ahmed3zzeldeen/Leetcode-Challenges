/* Write your PL/SQL query statement below */
Select ROUND(COUNT(A2.player_id)/COUNT(A1.player_id),2) as fraction
From Activity A1 LEFT OUTER JOIN  Activity A2
On A1.player_id = A2.player_id AND A2.event_date = A1.event_date + 1
Where (A1.player_id , A1.event_date ) In (
                          Select player_id , MIN(event_date)
                          From Activity
                          Group by player_id
                          );
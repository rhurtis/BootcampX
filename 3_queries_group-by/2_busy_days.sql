/* Showing the assignments per day but only showing when the total assignments are >=10. */
SELECT day, count(*) as total_assignments 
FROM assignments
GROUP BY day
HAVING count(*) >  10
ORDER BY day;
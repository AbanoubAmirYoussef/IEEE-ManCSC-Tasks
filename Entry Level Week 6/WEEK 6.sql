// Problem #1
SELECT player_id, MIN(event_date) AS first_login FROM Activity
GROUP BY player_id;

// Problem #2
SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE e.salary = (
    SELECT MAX(salary) FROM Employee WHERE departmentId = e.departmentId
);

// Problem #3
SELECT c.name AS Customers
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customerId
WHERE o.customerId IS NULL;

// Problem #4
SELECT a.id 
FROM Weather a
JOIN Weather b 
ON a.recordDate = b.recordDate + INTERVAL 1 DAY
WHERE a.temperature > b.temperature;

// Problem #5
SELECT s.user_id, 
       ROUND(AVG(CASE WHEN c.action = 'confirmed' THEN 1 ELSE 0 END), 2) AS confirmation_rate
FROM Signups s
LEFT JOIN Confirmations c 
ON s.user_id = c.user_id
GROUP BY s.user_id;

// Problem #6
SELECT 
    CASE 
        WHEN g.Grade >= 8 THEN s.Name 
        ELSE 'NULL' 
    END AS Name,
    g.Grade, 
    s.Marks
FROM Students s
JOIN Grades g
ON s.Marks BETWEEN g.Min_Mark AND g.Max_Mark
ORDER BY g.Grade DESC, 
         CASE 
             WHEN g.Grade >= 8 THEN s.Name 
             ELSE NULL 
         END ASC,
         s.Marks ASC;

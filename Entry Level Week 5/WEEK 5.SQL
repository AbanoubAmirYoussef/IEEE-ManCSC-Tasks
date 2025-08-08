-- Problem 1
SELECT * 
FROM CITY 
WHERE COUNTRYCODE = 'USA' 
AND POPULATION > 100000;
-- Problem 2
SELECT name 
FROM Employee
ORDER BY name ASC;

-- Problem 3
SELECT tweet_id 
FROM Tweets
WHERE LENGTH(content) > 15;

-- Problem 4
UPDATE Salary
SET sex = CASE 
            WHEN sex = 'm' THEN 'f' 
            ELSE 'm' 
          END;

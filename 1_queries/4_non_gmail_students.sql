/* Get all of the students without a gmail.com or phone number. */
SELECT name, id, email, cohort_id
FROM students
WHERE email NOT LIKE '%gmail.com'
AND phone IS NULL;
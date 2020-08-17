/* Get all of the students that don't have an email or phone number. */
SELECT name, id, cohort_id
FROM students
WHERE (PHONE IS NULL) OR (EMAIL IS NULL);

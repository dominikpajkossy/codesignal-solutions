CREATE PROCEDURE solution () BEGIN
SELECT
  SUM(
    CASE
      WHEN description IS NULL
      OR LOWER(description) REGEXP ('NULL($| +)|nil($| +)| +- +') THEN 1
      ELSE 0
    END
  ) as number_of_nulls
FROM
  departments;

END

CREATE PROCEDURE solution () BEGIN (
  SELECT
    country,
    COUNT(competitor) as competitors
  FROM
    foreignCompetitors
  GROUP BY
    country
)
UNION ALL
(
  SELECT
    'Total:' country,
    COUNT(competitor) as total
  FROM
    foreignCompetitors
)
ORDER BY
  (
    CASE
      WHEN country = 'Total:' THEN 1
      ELSE 0
    END
  ) ASC,
  country ASC;

END

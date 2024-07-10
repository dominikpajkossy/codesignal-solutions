CREATE PROCEDURE solution () BEGIN
SELECT
  director
from
  (
    SELECT
      director,
      SUM(oscars) as totalOscars
    FROM
      moviesInfo
    WHERE
      year > 2000
    GROUP BY
      director
    HAVING
      totalOscars > 2
    ORDER BY
      director ASC
  ) as mySubQuery;

END

CREATE PROCEDURE solution () BEGIN
select
  Name,
  ID
from
  grades
where
  Final > (Midterm2 * 0.5 + Midterm1 * 0.5)
order by
  substring(Name, 1, 3) ASC;

END

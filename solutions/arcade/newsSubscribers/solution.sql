CREATE PROCEDURE solution () BEGIN
select
  subscriber
from
  full_year
where
  newspaper like '%daily%'
union
select
  subscriber
from
  half_year
where
  newspaper like '%daily%'
order by
  subscriber asc;

END

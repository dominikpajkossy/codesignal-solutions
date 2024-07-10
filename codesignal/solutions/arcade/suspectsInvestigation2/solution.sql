CREATE PROCEDURE solution () BEGIN
select
  id,
  name,
  surname
from
  Suspect
where
  height <= 170
  or name NOT LIKE 'B%'
  or surname NOT LIKE 'Gre_n'
ORDER BY
  id ASC;

END

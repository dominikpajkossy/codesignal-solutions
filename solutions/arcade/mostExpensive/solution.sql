/*Please add ; after each select statement*/ BEGIN
select
  name
from
  Products
order by
  price * quantity desc,
  name asc
limit
  1;

CREATE PROCEDURE solution () END

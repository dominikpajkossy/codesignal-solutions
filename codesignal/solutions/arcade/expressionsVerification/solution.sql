CREATE PROCEDURE solution () BEGIN
select
  id,
  a,
  b,
  operation,
  c
from
  expressions
where
  case operation
    when '+' then a + b
    when '-' then a - b
    when '*' then a * b
    when '/' then a / b
  end = c;

END

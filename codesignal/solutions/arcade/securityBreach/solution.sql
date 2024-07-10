CREATE PROCEDURE solution () BEGIN
select
  first_name,
  second_name,
  attribute
from
  users
where
  attribute like BINARY CONCAT (
    '_%\%',
    users.first_name,
    '\_',
    users.second_name,
    '\%%'
  );

END

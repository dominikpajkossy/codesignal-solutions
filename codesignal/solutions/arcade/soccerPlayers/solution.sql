CREATE PROCEDURE solution () BEGIN
SELECT
  GROUP_CONCAT (
    CONCAT_WS (
      '',
      first_name,
      ' ',
      surname,
      ' #',
      NULL,
      player_number
    )
    ORDER BY
      player_number ASC SEPARATOR ', '
  ) as players
FROM
  soccer_team;

END

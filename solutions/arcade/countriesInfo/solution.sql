CREATE PROCEDURE solution () BEGINSELECT count(*) as number,
avg(population) as average,
sum(population) as totalFROM countries;

END

/* Write your PL/SQL query statement below */
SELECT
  ROUND(SUM(TIV_2016), 2) TIV_2016
FROM
  INSURANCE I1
WHERE
  1 = (
    SELECT
      COUNT(LAT
            ||'#'
            ||LON)
    FROM
      INSURANCE I2
    WHERE
      I2.LAT=I1.LAT
      AND I1.LON=I2.LON
  )
  AND 1 < (
    SELECT
      COUNT(TIV_2015)
    FROM
      INSURANCE I3
    WHERE
      I3.TIV_2015=I1.TIV_2015
  );
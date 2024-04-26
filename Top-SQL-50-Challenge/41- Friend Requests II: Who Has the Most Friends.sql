/* Write your PL/SQL query statement below */
SELECT
  ID,
  NUM
FROM
  (
    SELECT
      ID,
      COUNT(*) AS NUM
    FROM
      (
        SELECT
          REQUESTER_ID AS ID
        FROM
          REQUESTACCEPTED
        UNION
        ALL
        SELECT
          ACCEPTER_ID  AS ID
        FROM
          REQUESTACCEPTED
      )
    GROUP BY
      ID               
  )
WHERE
  NUM = (
    SELECT
      MAX(NUM)
    FROM
        (
    SELECT
      ID,
      COUNT(*) AS NUM
    FROM
      (
        SELECT
          REQUESTER_ID AS ID
        FROM
          REQUESTACCEPTED
        UNION
        ALL
        SELECT
          ACCEPTER_ID  AS ID
        FROM
          REQUESTACCEPTED
      )
    GROUP BY
      ID               
  )
  );
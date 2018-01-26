DELETE FROM contact
WHERE name = $1

returning * ;
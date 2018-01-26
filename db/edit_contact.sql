update contact set 
name = $2,
email = $3
where name = $1

returning * ;
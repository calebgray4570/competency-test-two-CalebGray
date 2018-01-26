insert into contact ( name, email )
    values ( $1, $2 )
    returning * ;
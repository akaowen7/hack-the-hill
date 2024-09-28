create table goals (
    id serial primary key,
    name text not null,
    description text not null,
    user_id integer not null,
    completed integer,
    todayProgress integer,
    totalProgress integer,
    defaultIncrement integer
);  

-- alter table goals add defaultIncrement integer;

create table users (
    id serial primary key,
    name text not null,
    email text not null,
);

-- get all goals for a user
select * from goals where user_id = 

-- add a goal
insert into goals (name, description, user_id, defaultIncrement) 
values ('', '', , );

-- delete all goals for a user
delete from goals where user_id = ;
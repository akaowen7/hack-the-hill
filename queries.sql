create table goals (
    id serial primary key,
    name text not null,
    description text not null,
    user_id integer not null,
    completed integer, -- binary rep of peg board
    todayProgress integer, -- amound the progress bar is filled
    totalProgress integer, -- total amount of progress needed to complete the goal
    defaultIncrement integer, -- amount to increment the progress bar by
    frequencyType integer, -- 0 = daily, 1 = weekly, 2 = monthly
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
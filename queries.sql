create table goals (
    id serial primary key,
    name text not null,
    description text not null,
    user_id integer not null,
    completed integer,
    todayProgress integer,
    totalProgress integer,
);   
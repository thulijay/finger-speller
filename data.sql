drop table if EXISTS exercises,progress,player,word;
create table player
(
    id serial not null primary key,
    name text
);
create table word
(
    id serial not null primary key,
    word text

);
create table exercises
(
    id serial not null primary key,
    player_ID INT,
    word_ID INT,
    FOREIGN KEY (player_ID) REFERENCES player(id),
    FOREIGN KEY (word_ID)REFERENCES word(id)
);
create table progress
(
    id serial not null primary key,
    successful_attempts int,
    failed_attempts int,
    total_attempts int,
    playerid int,
    FOREIGN KEY (playerid)REFERENCES player(id)
)
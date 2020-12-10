drop table if EXISTS exercises,progress,players,words;
create table players
(
    id serial not null primary key,
    name text
);
create table words
(
    id serial not null primary key,
    word text,
    level int

);
create table exercises
(
    id serial not null primary key,
    player_ID INT,
    word_ID INT,
    FOREIGN KEY (player_ID) REFERENCES players(id),
    FOREIGN KEY (word_ID)REFERENCES words(id)
);
create table progress
(
    id serial not null primary key,
    successful_attempts int,
    failed_attempts int,
    total_attempts int,
    playerid int,
    FOREIGN KEY (playerid)REFERENCES players(id)
);
INSERT into words (word,level)values('a',1);
INSERT into words(word,level)values('e',1);
INSERT into words (word,level)values('i',1);
INSERT into words(word,level)values('o',1);
INSERT into words (word,level)values('u',1);
INSERT into words (word,level)values('r',1);
INSERT into words (word,level)values('t',1);
INSERT into words (word,level)values('n',1);
INSERT into words(word,level)values('s',1);
INSERT into words (word,level)values('to',2);
INSERT into words (word,level)values('or',2);
INSERT into words(word,level)values('in',2);
INSERT into words (word,level)values('no',2);
INSERT into words (word,level)values('son',3);
INSERT into words (word,level)values('ran',3);
INSERT into words (word,level)values('eat',3);



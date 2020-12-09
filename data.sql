drop table if EXISTS exercises,progress,player,word;
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
);
INSERT into words (wordtospell,level)values('a',1);
INSERT into words(wordtospell,level)values('e',1);
INSERT into words (wordtospell,level)values('i',1);
INSERT into words(wordtospell,level)values('o',1);
INSERT into words (wordtospell,level)values('u',1);
INSERT into words (wordtospell,level)values('r',1);
INSERT into words (wordtospell,level)values('t',1);
INSERT into words(wordtospell,level)values('d',1);
INSERT into words (wordtospell,level)values('n',1);
INSERT into words(wordtospell,level)values('s',1);
INSERT into words (wordtospell,level)values('to',2);
INSERT into words (wordtospell,level)values('or',2);
INSERT into words(wordtospell,level)values('in',2);
INSERT into words (wordtospell,level)values('no',2);
INSERT into words (wordtospell,level)values('son',3);
INSERT into words (wordtospell,level)values('ran',3);
INSERT into words (wordtospell,level)values('eat',3);



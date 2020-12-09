drop table if EXISTS exercises,progress,player,word;
create table player
(
    id serial not null primary key,
    name text
);
create table word
(
    id serial not null primary key,
    wordtospell text

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
INSERT into word (wordtospell)values('a');
INSERT into word (wordtospell)values('e');
INSERT into word (wordtospell)values('i');
INSERT into word (wordtospell)values('o');
INSERT into word (wordtospell)values('u');
INSERT into word (wordtospell)values('r');
INSERT into word (wordtospell)values('t');
INSERT into word (wordtospell)values('d');
INSERT into word (wordtospell)values('n');
INSERT into word (wordtospell)values('s');
INSERT into word (wordtospell)values('to');
INSERT into word (wordtospell)values('or');
INSERT into word (wordtospell)values('in');
INSERT into word (wordtospell)values('no');
INSERT into word (wordtospell)values('son');
INSERT into word (wordtospell)values('ran');
INSERT into word (wordtospell)values('eat');



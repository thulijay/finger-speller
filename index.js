const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser")
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/fingerspelldata';

const pool = new Pool({
  connectionString
});

const Speller = require("./fingerSpell");
const SpellerRoutes = require('./routes');
const speller = Speller(pool);
const spellerRoutes = SpellerRoutes(speller);

app.use(session({
  secret: "<add a secret string here>",
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/players', spellerRoutes.players)

app.get('/playerdata',spellerRoutes.playerData)

app.get('/wordData',spellerRoutes.wordData)

app.get('/exercise',spellerRoutes.playerExercise)

app.get('getWord', spellerRoutes.level1Data)

app.get('/progressdata',spellerRoutes.progressData)
const PORT = process.env.PORT || 2009;
app.listen(PORT, function () {
    console.log("App started at port :", PORT);
  })
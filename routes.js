module.exports = function spellRoutes(spellRoute) {
  async function players(req, res) {
    const name = req.body.nameItem;

    const create = await spellRoute.createPlayer(name);
    res.render("index", {});
  }

  async function key(req, res) {

    res.render("key", {});
  }

  async function loadLevel1(req, res) {
    const getWord = await spellRoute.level1Data();

    res.render("level1", {
        level1Word: getWord,

    });
  }

  async function loadLevel2(req, res) {
    const getWord = await spellRoute.level2Data();

    res.render("level2", {
        level2Word: getWord,

    });
  }

  async function loadLevel3(req, res) {
    const getWord = await spellRoute.level3Data();

    res.render("level3", {
        level3Word: getWord,

    });
  }

  async function levelPage(req, res) {
    const getWord = await spellRoute.level1Data();
    console.log({ getWord });
    res.render("activity", {
      level1Word: getWord,
    });
  }

  async function progressData(req, res) {
    const progress = await spellRoute.getProgress();
    console.log(progress);
    res.send(progress);
  }
  async function playerData(req, res) {
    const player = await spellRoute.getPlayer();
    console.log(player);
    res.send(player);
  }
  async function wordData(req, res) {
    const word = await spellRoute.getWords();
    console.log(word);
    res.send(word);
  }
  async function playerExercise(req, res) {
    const exercise = await spellRoute.getExercise();
    console.log(exercise);
    res.send(exercise);
  }
  return {
    playerExercise,
    wordData,
    playerData,
    progressData,
    players,
    levelPage,
    loadLevel1,
    loadLevel2,
    loadLevel3,
    key
  };
};

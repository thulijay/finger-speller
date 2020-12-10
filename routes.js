module.exports = function spellRoutes(spellRoute) {

async function players(req, res){
    const name = req.body.nameItem

    const create = await spellRoute.createPlayer(name);
    res.render('index', {
  
         });
}

async function levelPage(req, res){
const getWord = await spellRoute.level1Data();
console.log({getWord});
res.render('activity', {
  level1Word: getWord
});
}



    async function progressData(req,res) {
        const progress = await spellRoute.getProgress()
        console.log(progress)
        res.send(progress)


    }
    async function playerData(req,res) {
        const player = await spellRoute.getPlayer()
        console.log(player)
        res.send(player)
    }
    async function wordData(req,res) {

        const word = await spellRoute.getWords()
        console.log(word)
        res.send(word)

    }
    async function playerExercise(req,res) {

        const exercise = await spellRoute.getExercise()
        console.log(exercise)
        res.send(exercise)

    }
    return {
        playerExercise,
         wordData,
        playerData, 
        progressData,
        players,
        levelPage
    }
}
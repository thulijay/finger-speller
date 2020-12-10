module.exports = function fingerSpell(pool) {
    async function createPlayer(name) {
        await pool.query('insert into players(name) values($1)', [name])

    }

    async function updateProgress() {
        await pool.query('select id from ');//this is to select id so that one human is selected ,
        // to update the total attempts , successful attempts , and failed attempts.

        //need to define id
        const playerid = await pool.query('select playerid from progress where id = $1', [id]);


        const updateFailed = ('update players set failed_attempts = successful_attempts + 1 where playerid =$1', [playerid]);

        //create if statement to update only when successful
        const updateSuccess = ('update players set successful_attempts = successful_attempts + 1 where playerid =$1', [playerid])

        //add successful and failed
        const updateTotal = ('update players set total_attempts = successful_attempts + 1 where playerid =$1', [playerid])

    }
    async function getPlayer() {
        const playerData = await pool.query('select * from players');
        return playerData.rows;
    }
    async function getWords() {
        const wordData = await pool.query('select * from words');
        return wordData.rows;
    }
    async function getExercises() {
        const exerciseData = await pool.query('select * from exercises')
        return exerciseData.rows
    }
    async function getProgress() {
        const progressData = await pool.query('select * from progress')
        return progressData.rows;
    }
    async function correctWord(name) {
        var id = await pool.query("select id from players where name=$1", [name])
        await pool.query("update progress set successful_attempts =(successful_attempts + 1) where playerid =$1", [id])
    }

    async function incorrectWord(name) {
        var id = await pool.query("select id from players where name=$1", [name])
        await pool.query("update progress set failed_attempts =(failed_attempts + 1) where playerid =$1", [id])
    }

    async function totalAttempts(name) {
        var id = await pool.query("select id from players where name=$1", [name])
        var failed = await pool.query("select failed_attempts from progress where playerid =$1", [id])
        var successful = await pool.query("select successful_attempts from progress where playerid =$1", [id])
        var total = failed + successful
        await pool.query("update progress set total_attempts =($1) where playerid =$2", [total, id])
    }


    return {
        createPlayer,
        updateProgress,
        getPlayer,
        getWords,
        getExercises,
        getProgress,
         createPlayer,
        correctWord,
        incorrectWord,
        totalAttempts,



    }
}
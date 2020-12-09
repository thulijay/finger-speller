module.exports = function (pool) {

    async function createPlayer(name) {
        await pool.query('insert into players(name) values($1)', [name])

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


    async function icon() {
    }


    return {
        createPlayer,
        correctWord,
        incorrectWord,
        totalAttempts,
        

    }
}
module.exports = function fingerSpell(pool) {
   async function createPlayer(name) {
        await pool.query('insert into players(name) values($1)', [name])

    }

   async function updateProgress(){
        await pool.query('select id from ');//this is to select id so that one human is selected ,
// to update the total attempts , successful attempts , and failed attempts.

//need to define id
const playerid = await pool.query('select playerid from progress where id = $1',[id]);


const updateFailed = ('update players set failed_attempts = successful_attempts + 1 where playerid =$1', [playerid]);

//create if statement to update only when successful
const updateSuccess = ('update players set successful_attempts = successful_attempts + 1 where playerid =$1', [playerid])

//add successful and failed
const updateTotal = ('update players set total_attempts = successful_attempts + 1 where playerid =$1', [playerid])

}
    return {
        createPlayer,
        updateProgress


    }
}
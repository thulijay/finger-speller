module.exports = function fingerSpell(pool) {
   async function createPlayer(name) {
        await pool.query('insert into player values($1)', [name])

    }
    async function updateProgress(){
await pool.query('select id from ');//this is to select id so that one human is selected ,
// to update the total attempts , successful attempts , and failed attempts.


}
    return {
        createPlayer,
        updateProgress


    }
}
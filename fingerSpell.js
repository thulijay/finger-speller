 
module.exports = function fingerSpell(pool) {
    // async function createPlayer(name) {
    //      await pool.query('insert into player values($1)', [name])
 
    //  }
    async function failedCounterFlow(){
      

    }    

     async function playerWord(word){
         const wordSelection = await pool.query('select wordtospell from word where wordtospell = $1 ', [word])
         return wordSelection;
     }

     async function successfullPlayer(success){
         const successfullSelection = await pool.query('insert into progress (successfull_attempts) (values) $1', [success])
         return successfullSelection.rows;
     }

     async function failedPlayer(failed){
         const failedSelection = await pool.query('insert into progress (failed_attempts) (values) $1', [failed]);
         return failedSelection.rows;
     }

     async function playerTotal(total){
        const totalSelection = await pool.query('insert into progress (total_attempts) $1', [total]);
        return totalSelection.rows;
    }

//      async function updateProgress(){
//  await pool.query('select id from ');//this is to select id so that one human is selected ,
//  // to update the total attempts , successful attempts , and failed attempts.
 
 
//  }
     return {
        //  createPlayer,
        //  updateProgress,
         playerWord,
         successfullPlayer,
         failedPlayer,
         playerTotal,
         failedCounterFlow
 
 
     }
 }
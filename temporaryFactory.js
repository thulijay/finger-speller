module.exports = function temp(pool) {
    async function getPlayer() {
        const playerData = await pool.query('select * from players');
        return playerData.rows;
    }
    async function getWords() {
        const wordData = await pool.query('select * from words');
        return wordData.rows;
    }
    async  function getExercises() {
        const exerciseData = await pool.query('select * from exercises')
        return exerciseData.rows
    }
    async   function getProgress() {
        const progressData = await pool.query('select * from progress')
        return progressData.rows;
    }
    return {
        getPlayer,
        getWords,
        getExercises,
        getProgress
    }

}
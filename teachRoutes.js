module.exports = function teachRoutes(teachRoute) {

    async function getLetter(req, res){
    
        const highestLetter = await teachRoute.highest();

    const wordA = await teachRoute.wordLevel1();
        res.render('activity', {
         wordA
             });
    }

return{
    getLetter
}
    }
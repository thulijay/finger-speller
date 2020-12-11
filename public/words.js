const  levelOne = document.querySelector('.levelOnes');
// const  levelTwo = document.querySelector('levelTwos');
// const  levelThree = document.querySelector('levelThrees');

const level1 = document.querySelector('.level1').innerHTML;
// const level2 = document.querySelector('.level2').innerHTML;
// const level3 = document.querySelector('.level3').innerHTML;

const levelOneList = Handlebars.compile(level1);
// const levelTwoList = Handlebars.compile(level2);
// const LevelThreeList = Handlebars.compile(level3);

const levelOneBtn = document.getElementById('levelOne')

axios
.get('https://spell-it-001.herokuapp.com/wordData')
.then(function(result){
    levelOne.innerHTML = levelOneList({
        levelOne : result.data
    })
})

levelOneBtn.addEventListener('click', () => {
    const partOne = levelOne.value;

    axios
    .get('https://spell-it-001.herokuapp.com/wordData' + partOne)
    .then(function(result){
        levelOne.innerHTML = level1({
            levelOne : result.data
        })
    })
})

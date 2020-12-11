//import { fingerSpell } from '../fingerSpell.js';
//let spellFact = fingerSpell();

/*
const spellFact = require('../fingerSpell');

const spell = spellFact(pool);*/

const playerBtn = document.querySelector(".playerBtn")
const nameElem = document.querySelector(".nameEntered")
const btn=document.querySelector('.bread');

btn.addEventListener('click',function(){
  var name = nameElem.value
alert(name+" has been Logged in to Spell-It")
 console.log(name)

})

// axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function (result) {
//   colorCar.innerHTML = filterTemplate({

//     carColor: result.data

//   });

// });

// axios.get("http://localhost:2009/player").then(function (result) {
//   colorCar.innerHTML = filterTemplate({

//     carColor: result.data

//   });

// });


// btn.addEventListener("click", function() {
  
// console.log(name)
//   if(name !== ""){
//     spellFact.createPlayer(name)
//   }


// });
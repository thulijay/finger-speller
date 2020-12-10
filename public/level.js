const playerBtn = document.querySelector(".playerBtn")
const nameElem = document.querySelector(".nameEntered")
const btn=document.querySelector('.bread');
btn.addEventListener('click',function(){
alert('')

})
var spellFact = fingerSpell();

axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function (result) {
  colorCar.innerHTML = filterTemplate({

    carColor: result.data

  });

});

axios.get("http://localhost:2009/player").then(function (result) {
  colorCar.innerHTML = filterTemplate({

    carColor: result.data

  });

});


playerBtn.addEventListener("click", function() {
  var name = nameElem.value

  if(name !== ""){
    spellFact.createPlayer(name)
  }


});
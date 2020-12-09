const playerBtn = document.querySelector(".playerBtn")
const nameElem = document.querySelector(".nameEntered")

var spellFact = fingerSpell();

axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function (result) {
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
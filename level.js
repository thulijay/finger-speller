axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function (result) {
  colorCar.innerHTML = filterTemplate({

    carColor: result.data

  });

});
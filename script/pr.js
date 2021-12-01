$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Prishtina,&units=metric&APPID=65adee7506f2c94d5bf64c9532477ce8",
    function (data) {
      console.log(data);
  
      var icon3 =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var temp3 = Math.floor(data.main.temp);
      var weather3 = data.weather[0].main;
      var name3 = data.name;
  
      $(".icon3").attr("src", icon3);
      $(".weather3").append(weather3);
      $(".temp3").append(temp3);
      $(".name3").append(name3);
  
      /* function (today)
      {
        if (weather == Clouds){
          today =
        }
      }
   */
    }
  );
  
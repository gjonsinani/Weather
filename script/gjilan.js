$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Tirana,&units=metric&APPID=65adee7506f2c94d5bf64c9532477ce8",
    function (data) {
      console.log(data);
  
      var icon2 =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var temper = Math.floor(data.main.temp);
      var weather2 = data.weather[0].main;
      var name2 = data.name;
  
      $(".icon2").attr("src", icon2);
      $(".weather2").append(weather2);
      $(".temper").append(temper);
      $(".name2").append(name2);
  
      /* function (today)
      {
        if (weather == Clouds){
          today =
        }
      }
   */
    }
  );
  
$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=Viti,&units=metric&APPID=65adee7506f2c94d5bf64c9532477ce8",
  function (data) {
    console.log(data);

    var icon =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    var name = data.name;

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
    $(".name").append(name);

    /* function (today)
    {
      if (weather == Clouds){
        today =
      }
    }
 */
  }
);

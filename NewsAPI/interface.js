// $(document).ready(function() {
//   var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
//   var foreUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
//   var zipUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//   var apiKey = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
//   var units = '&units=imperial';
//
//    $('#current-city').change(function() {
//      var city = $('#current-city').val(); // local variable as this is defined by the change event
//      $.ajax({
//        type: 'GET',
//        url: url + city + apiKey + units,
//        success: function(data) {
//          $('#current-temperature').text(data.main.temp + " °F");
//        }
//      });
//
//      $.get(url + city + apiKey + units, function(data) {
//       $('#current-weather').text(data.weather[0].description);
//      })
//
//      $.ajax({
//        type: 'GET',
//        url: foreUrl + city + apiKey + units,
//        success: function(data) {
//          $('#current-forecast').text((data.list[0].main.temp_max + data.list[0].main.temp_min) / 2 + " °F");
//        }
//      });
//
//
//    }) // end change event
//
//    //
//    // $('#select-zipcode').submit(function(event) {
//    //   event.preventDefault();
//    //   var zip = $('#current-city-zipcode').val();
//    //   $.get(zipUrl + zip + apiKey + units, function(data) {
//    //     $('#current-temperature').text(data.main.temp + " °C");
//    //   })
//    // })
// })

$(function() {

  var newsUrl = 'https://newsapi.org/v2/everything?q=';
  var newsKey = '&apiKey=915ee1a9cb2d4cd7867ffa0970945e8f';

  var $submit = $('#news-btn');


  $submit.click(function(event) {
    var keyword = $('#news-field');
    var results = $('#results');
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: newsUrl + keyword.val() + newsKey,
      success: function(response) {
        var list;
        keyword.val('');
        results.html('');
        for(var i = 0; i < response.articles.length; i++) {
          list += "<h1>Title: " + response.articles[i].title + "</h1>" + "<h2>Author: " + response.articles[i].author + "</h2>" + "<p>Description: " + response.articles[i].description + "</p>" + "<p><a href='" + response.articles[i].url + "' target='_blank'>Click here to see the full story</a></p>";
        };
        return results.append(list);
      }
    });
  });

})

    var APIKey = 'e7610467436ab1c59773adeceb236ff7'
    

<<<<<<< HEAD
    /* exchangeRates();
    hotelBooking();
    restaurants();
    weather(); */
=======
    
>>>>>>> 82e90701e124023b134a714322685a041e7a9b07
    
    function exchangeRates() {
        var query = "http://api.currencylayer.com/live?access_key=c783200a0ae3d77071075137f56ccece";
            $.ajax({
              url: query,
              method: "GET"

            }).then(function (response) {
              console.log(response);
              $('.currency').text('Currency:' + ' USD/GBP ' + response.quotes.USDGBP + ' USD/EUR ' + response.quotes.USDEUR + ' USD/JPY ' + response.quotes.USDJPY + ' USD/RUB ' + response.quotes.USDRUB)
            });

            
          
      }


    function hotelBooking(city) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=" + city,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hotels4.p.rapidapi.com",
                "x-rapidapi-key": "efb9190d78msh44fd7735c9188a6p17edbfjsn0f3829e74837"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            $('.hotels').text('Hotels: ' + response.suggestions[3].entities[0].name + '/' + response.suggestions[3].entities[1].name )
        });
            
            
        };
    

    function restaurants(city) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rapidapi.p.rapidapi.com/photos",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
                "x-rapidapi-key": "efb9190d78msh44fd7735c9188a6p17edbfjsn0f3829e74837"
            },
            "data": {
                "language": "en_US",
                "location_id": "15333482",
                "currency": "USD",
                "limit": "1"
            }
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

     function weatherCall(city) {
        console.log(city)
     var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=' + APIKey + '&units=imperial';

         $.ajax({
             url: queryURL,
             method: 'GET'
            })
<<<<<<< HEAD
            .then(function(response) {
                console.log(queryURL)
                console.log(response) 
                $(".city").html("<h1>" + response.name + " Weather Details</h1>");
                $('.temp').text('Temperature: (F)' + response.main.temp)
                $('.humidity').text('Humidity:' + response.main.humidity)
                $('.windSpeed').text('Wind Speed:' + response.wind.speed)
                $('.clouds').text('Clouds:' + response.clouds.all)
=======

             .then(function(response) {
                 console.log(queryURL)
                 console.log(response)
                 $('.weather').text('Weather:' + response.main.temp + ' °F')
                 $('.location').text('Location: ' + response.name) 
                
>>>>>>> 82e90701e124023b134a714322685a041e7a9b07
            });
        }


<<<<<<< HEAD
=======
     

>>>>>>> 82e90701e124023b134a714322685a041e7a9b07
    $('#search-form').on('submit', function(e){
        e.preventDefault()
        var search = $('#search-text').val()
        exchangeRates(search);
        hotelBooking(search);
        restaurants(search);
<<<<<<< HEAD
    })

    
=======
        weatherCall(search)
    })
>>>>>>> 82e90701e124023b134a714322685a041e7a9b07

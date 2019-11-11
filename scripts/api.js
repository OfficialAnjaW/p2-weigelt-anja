// // 4. API

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        //Create Quote

        var randomQuote = document.createTextNode(apiResult.name);

        //Add quote to screen

        var quoteLocation = document.getElementById('quote-location');
        quoteLocation.appendChild(randomQuote);


    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33897,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();

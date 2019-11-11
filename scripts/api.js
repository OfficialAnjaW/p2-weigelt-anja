// // 4. API

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        //Create Quote

        var randomQuote = document.createTextNode(apiResult.value);

        //Add quote to screen

        var quoteLocation = document.getElementById('quote-location');
        quoteLocation.appendChild(randomQuote);


    }
};
xmlhttp.open('GET', 'https://api.chucknorris.io/jokes/random', true);
xmlhttp.send();

// // 4. API

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        //Create Quote

        var randomQuote = document.createTextNode(apiResult.contents.quotes[0].quote);
        var quoteAuthor = document.createTextNode(apiResult.contents.quotes[0].author);

        //Add quote & author to screen

        var quoteLocation = document.getElementById('quote-location');
        quoteLocation.appendChild(randomQuote);
        var authorLocation = document.getElementById('author');
        authorLocation.appendChild(quoteAuthor);

    }
};
xmlhttp.open('GET', 'http://quotes.rest/qod.json?category=love', true);
xmlhttp.send();

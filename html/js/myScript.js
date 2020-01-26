// JSON
// var jsonURL     = "https://codersuk-test.s3-eu-west-1.amazonaws.com/data.json";
var jsonURL     = "https://github.com/uglyeoin/codersmeetup2/blob/master/html/js/data.json";
var jsonArray   = window.fetch(jsonURL);

// API Amazon Lambda
var apiURL      = "https://2tf15xu7pg.execute-api.us-east-1.amazonaws.com/default/eoinsLambdaFunction";
var apiKey      = "x-api-key";
var apiValue    = "oEaZASeL3V30AevqVdDjT9VenBCi3O5Zsy7kqQ14";
var fullApiKey  = apiURL + apiKey + apiValue;

fetch(jsonURL, {method: 'get'}) // Call the fetch function passing the jsonURL of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
    console.log ("200: Success.  ES6 Method");
})
// Retrieve its body as ReadableStream
window.fetch(jsonURL)
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        console.log(json[0].company);
    }).then(function(json){
        for (i = 0; i < json[0].length; i++) {
            x += json[0][i];
            console.log(x);
        } 
    })
    ;



    // API Stuff
window.fetch(fullApiKey)
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        console.log(json[0].body);
    });    
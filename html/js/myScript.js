var url = "https://codersuk-test.s3-eu-west-1.amazonaws.com/data.json";


fetch(url, {method: 'get'}) // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
    console.log ("200: Success.  ES6 Method");
    console.log (url);
    console.log(typeof(url));
})
// Retrieve its body as ReadableStream
window.fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        console.log(json[0].company);
    });
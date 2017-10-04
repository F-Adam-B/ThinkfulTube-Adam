"use strict";

const endpoint = "https://www.googleapis.com/youtube/v3/search"

const store = [];


// function getDataFromYoutube (inquiry) {
    const params = {
        part: 'snippet',
        key: 'AIzaSyALqqmLfhh0VvpC6AGpDNpqA7YP59CoyPI',
        q: 'dogs',
        per_page: 5
    }; 
    // sub below function with call back function in the parameters
    $.getJSON(endpoint, params, function(data){
         console.log(data);

    //    console.log('getDataFromYoutube ran');
// // });

// function watchInputForm () {
//  console.log('watchInputForm ran')
// };

// function renderPage () {

// };


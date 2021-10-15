// mobile menu
var burgerIcon = document.querySelector('#burger');
var navbarMenu = document.querySelector('#nav-links');
var quoteResponseEl = document.getElementById("#response");
var buttonSubmitEl = document.getElementById("#quoteGenerator")
let kanyeButton = document.getElementById('kanyeQuotes')
let previousQuote 

var currentQuote = 0;
let currentQuoteIndex = 0


burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});


// $(document).ready(function(){
//     $('.your-class').slick({
//         setting-: setting-value
//     });
// });

//NOTE: Quote button works and is now the photo. The quote generator keeps generating quotes without hiding the previous one. Tried many things can't get it to work. Will keep trying.
let quotesDiv = document.getElementById('kanyeQuotes') // declares the quotes div as a variable
quotesDiv.addEventListener("click", evt =>{
    fetch('https://api.kanye.rest') //returns kanye api as an object
    .then(res => res.json())// parses response as a object
    .then(quote => { //calls back new json
    quotesDiv.innerHTML += `<p>${quote.quote}</p>`//allows to put json object to text in DOM
    
 });     
}
)

function showResponse(event){
  
}


//NOTE: The youtube playlist is stored in an array but cannot get all the videos to display. Only one will show at a single time. And only if the number in the indexes in the embedVideo function are changed from 1-20. 
function getVideo() { 
  $.ajax({
    type: 'GET', 
    url: 'https://youtube.googleapis.com/v3/playlistItems',
    data: {
       key: 'AIzaSyAIsi7xMBnzvqyINs3IFXe1atvBBb57MQ8', 
       part: 'snippet', 
       maxResults: 25,
       playlistId: 'PLkd5lw_1df5DnJ_b1cwUwUMV9y5RVs0Oy',
       videoEmbeddable: 'true',
      
    },
    success: function(data){
        embedVideo(data) 
    },
    error: function(response){ 
        console.log("Request Failed");
    }
  });
}

function embedVideo(data) { 
  console.log(data)
$('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[20].snippet.resourceId.videoId)
$('h3').text(data.items[20].snippet.title)
$('.description').text(data.items[20].snippet.description)
}


getVideo();


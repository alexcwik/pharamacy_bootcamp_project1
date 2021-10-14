var quoteResponseEl = document.getElementById("#response");
var buttonSubmitEl = document.getElementById("#quoteGenerator")

let quotesDiv = document.getElementById('quotes') // declares the quotes div as a variable

fetch('https://api.kanye.rest') //returns kanye api as an object
  .then(res => res.json())// parses response as a object
   .then(quote => { //calls back new json
      quotesDiv.innerHTML += `<p>${quote.quote}</p>`//allows to put json object to text in DOM
  })

function showResponse(event){
  event.preventDefault();
  console.log(event);
  var quotes = quoteResponseEl.textContent = response;

}

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
$('iframe').attr('src', 'https://www.youtube.com/embed/playlistId' + data.items[20].id.playlistId)
$('h3').text(data.items[20].snippet.title)
$('.description').text(data.items[20].snippet.description)
}


getVideo();

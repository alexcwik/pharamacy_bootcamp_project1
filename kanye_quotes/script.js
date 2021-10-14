var quoteResponseEl = document.getElementById("#response");
var buttonSubmitEl = document.getElementById("#quoteGenerator")

let quotesDiv = document.getElementById('quotes')
fetch('https://api.kanye.rest')
   .then(res => res.json())
   .then(quote => {
      quotesDiv.innerHTML += `<p>${quote.quote}</p>`
   })

function showResponse(event){
   event.preventDefault();
   console.log(event);
   var quotes = quoteResponseEl.textContent = response;

}

buttonSubmitEl.addEventListener("click", quoteGenerator);






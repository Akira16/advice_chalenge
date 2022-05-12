const refresh = document.querySelector('.refresh');
const id = document.querySelector('.id');
const quote_text = document.querySelector('.qoute_text') 
refresh.addEventListener('click', () =>{
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then((data) => {
      id.innerText = data.slip.id
      quote_text.innerText = data.slip.advice
  });
})

fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then((data) => {
      id.innerText = data.slip.id
      quote_text.innerText = data.slip.advice
  });
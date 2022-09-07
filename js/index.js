document.querySelector('#btn').addEventListener('click', ()=>{

  const searches = document.querySelector('#Search').value

 console.log(searches);
  const url = `https://api.nasa.gov/planetary/apod?api_key=CJaKHouXUHoAO1S4lciOz2lW3UfIvIouTC4fFmah&date=${searches}`

 

  fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);

    document.querySelector('#result-title').innerHTML = data.title
    document.querySelector('#result').innerText = data.explanation
    document.querySelector('#result-image').src = data.hdurl
    
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });   
})





// Harmbugger for mobile

 const items = document.getElementById('menu-items');


 document.querySelector('#icon').addEventListener('click', ()=>{

 items.classList.toggle('show');




 })





//  Dark mode

const darkMode = document.getElementById('sun')
const body = document.getElementById('body-background')


darkMode.addEventListener('click', ()=>{

  body.classList.toggle('dark_theme')

  if(body.classList.contains('dark_theme')){

    darkMode.src = 'Svgs/icons8-moon-symbol-50.png'
    
  }else{
    darkMode.src = 'Svgs/icons8-summer-50.png'
  }
    
  

})


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
    document.querySelector('img').src = data.hdurl
    
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });   
})



// Nav toggle

 const items = document.getElementById('menu-items');


 document.querySelector('#icon').addEventListener('click', ()=>{

 items.classList.toggle('show');



 })



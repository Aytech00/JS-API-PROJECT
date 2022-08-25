document.querySelector('#btn').addEventListener('click', ()=>{

    fetch('https://api.nasa.gov/planetary/apod?api_key=ClcgnaggHkojs8LqMbe0hc4rLq8CIgmKiwq4bZnU')
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




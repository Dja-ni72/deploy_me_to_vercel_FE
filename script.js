
fetch('https://deploy-me-to-vercel-be-h2ow.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });
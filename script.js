
fetch('https://deploy-me-to-vercel-be-test.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });
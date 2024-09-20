
fetch('https://deploy-me-to-vercel-be-h2ow.vercel.app/year')
 .then(response => response.json())
 .then(data => {
  console.log(data);
  document.getElementById('year').textContent = data.year;
 });

const resultsContainer = document.getElementById('results');

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = item.title;
      resultsContainer.appendChild(itemElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

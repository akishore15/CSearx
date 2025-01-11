// script.js

document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;

    try {
        const response = await fetch(`http://localhost:5000/search?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        if (data.length > 0) {
            data.forEach(result => {
                resultsDiv.innerHTML += `<p>${result}</p>`;
            });
        } else {
            resultsDiv.innerHTML = 'No results found';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

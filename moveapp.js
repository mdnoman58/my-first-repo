
document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>Searching...</p>';

    if (query.trim() === '') {
        resultsDiv.innerHTML = '<p>Please enter a movie name.</p>';
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=YOUR_API_KEY`);
        const data = await response.json();

        if (data.Response === 'True') {
            resultsDiv.innerHTML = data.Search.map(movie => `
                <div class="movie">
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title} Poster">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                </div>
            `).join('');
        } else {
            resultsDiv.innerHTML = `<p>${data.Error}</p>`;
        }
    } catch (error) {
        resultsDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    }
});

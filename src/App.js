const apiKey = "5218a676"; // Replace with your OMDb API key

document.getElementById("searchBtn").addEventListener("click", async () => {
  const query = document.getElementById("query").value.trim();
  if (!query) return;

  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();

    const moviesContainer = document.getElementById("movies");
    moviesContainer.innerHTML = ""; // Clear previous results

    if (data.Response === "False") {
      moviesContainer.innerHTML = `<p>No results found.</p>`;
      return;
    }

    data.Search.forEach((movie) => {
      const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
        <img src="${poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>Year: ${movie.Year}</p>
      `;
      moviesContainer.appendChild(movieCard);
    });
  } catch (error) {
    console.error("Fetch error:", error);
    document.getElementById("movies").innerHTML = `<p>Error fetching data.</p>`;
  }
});


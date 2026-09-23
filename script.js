const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("results");
const emptyState = document.getElementById("empty-state");
const resultCount = document.getElementById("result-count");
const quickPicks = document.getElementById("quick-picks");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) return;

  console.log("Searching:", query);

  resultCount.textContent = "Searching...";
  results.innerHTML = "";
  emptyState.style.display = "none";

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=30RjuQvypxgTgILA1u-fVu2EQn5Yy5zC1ZqB_hDQivM`
    );
    
    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    console.log(data);

    resultCount.textContent = `Showing ${data.results.length} results`;

    if (data.results.length === 0) {
      emptyState.textContent = "No results found. Try another search.";
      emptyState.style.display = "block";
      return;
    }

    emptyState.style.display = "none";

    data.results.forEach((photo) => {
      const img = document.createElement("img");

      img.src = photo.urls.small;
      img.alt = photo.alt_description || query;

      results.appendChild(img);
    });

  } catch (error) {
    console.error(error);
  resultCount.textContent = "Something went wrong. Please try again.";
    results.innerHTML = "";
    emptyState.style.display = "none";
  }
});

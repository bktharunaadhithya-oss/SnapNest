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

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=30RjuQvypxgTgILA1u-fVu2EQn5Yy5zC1ZqB_hDQivM`
  );

  const data = await response.json();

console.log(data);

resultCount.textContent = `Showing ${data.results.length} results`;

results.innerHTML = "";

data.results.forEach((photo) => {
  const img = document.createElement("img");

  img.src = photo.urls.small;

  results.appendChild(img);
});

  });
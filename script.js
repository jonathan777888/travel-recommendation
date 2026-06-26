const recommendations = {
beach: [
{
name: "Maldives Beach",
image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
description: "A peaceful tropical beach with clear blue water and white sand."
},
{
name: "Bora Bora Beach",
image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=80",
description: "A beautiful island destination known for turquoise lagoons and relaxing views."
}
],

temple: [
{
name: "Kyoto Temple",
image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
description: "A historic Japanese temple surrounded by nature and traditional architecture."
},
{
name: "Temple in Thailand",
image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
description: "A peaceful temple destination with rich culture and beautiful design."
}
],

country: [
{
name: "Japan",
image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
description: "Japan offers modern cities, ancient temples, mountains, and unique cultural experiences."
},
{
name: "Italy",
image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80",
description: "Italy is famous for history, art, food, architecture, and beautiful cities."
}
]
};

function searchRecommendation() {
const input = document.getElementById("searchInput").value.toLowerCase().trim();
const resultsContainer = document.getElementById("resultsContainer");

resultsContainer.innerHTML = "";

let results = [];

if (input.includes("beach") || input.includes("beaches") || input.includes("plage") || input.includes("plages")) {
results = recommendations.beach;
} else if (input.includes("temple") || input.includes("temples")) {
results = recommendations.temple;
} else if (
input.includes("country") ||
input.includes("countries") ||
input.includes("pays") ||
input.includes("japan") ||
input.includes("italy")
) {
results = recommendations.country;
}

if (results.length === 0) {
resultsContainer.innerHTML = `       <p>No recommendation found. Try searching for beach, temple, or country.</p>
    `;
return;
}

results.forEach((place) => {
const card = document.createElement("div");
card.className = "card";

```
card.innerHTML = `
  <img src="${place.image}" alt="${place.name}">
  <div class="card-content">
    <h3>${place.name}</h3>
    <p>${place.description}</p>
  </div>
`;

resultsContainer.appendChild(card);
```

});

document.getElementById("results").scrollIntoView({ behavior: "smooth" });
}

function clearResults() {
document.getElementById("searchInput").value = "";
document.getElementById("resultsContainer").innerHTML = "";
}

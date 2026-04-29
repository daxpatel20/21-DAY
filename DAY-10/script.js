const products = [
  { name: "Laptop", category: "electronics", price: "₹50000" },
  { name: "Headphones", category: "electronics", price: "₹2000" },
  { name: "T-Shirt", category: "clothing", price: "₹500" },
  { name: "Jeans", category: "clothing", price: "₹1200" },
  { name: "Java Basics", category: "books", price: "₹300" },
  { name: "HTML Basics", category: "books", price: "₹250" }
];

let currentCategory = "all";

function displayProducts(data) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<p>No products found 😢</p>";
    return;
  }

  data.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.category.toUpperCase()}</p>
      <p class="price">${p.price}</p>
    `;

    list.appendChild(card);
  });
}

function filterProducts(category, btn) {
  currentCategory = category;

  document.querySelectorAll(".filters button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  applyFilters();
}

function applyFilters() {
  const search = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filtered = products.filter(p => {
    return (
      (currentCategory === "all" || p.category === currentCategory) &&
      p.name.toLowerCase().includes(search)
    );
  });

  displayProducts(filtered);
}

document
  .getElementById("searchInput")
  .addEventListener("input", applyFilters);

displayProducts(products);
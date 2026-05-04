const products = [
  {
    id: 1,
    name: "Apple",
    price: 120,
    category: "fruit",
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
  },
  {
    id: 2,
    name: "Banana",
    price: 60,
    category: "fruit",
    img: "https://t4.ftcdn.net/jpg/14/38/40/45/360_F_1438404595_1xovTEsBNaKfKJAJ7bEjgHWfbglx2QF3.jpg"
  },
  {
    id: 3,
    name: "Carrot",
    price: 40,
    category: "vegetable",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6R6iJQkule3iGuDl8MkdzDEdSYEC42gJ9z4SnbOd9A&s&ec=121643109"
  },
  {
    id: 4,
    name: "Tomato",
    price: 50,
    category: "vegetable",
    img: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469"
  }
];


function displayProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}


function addToCart(id) {
  const product = products.find(p => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart.html";
}


function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}




displayProducts(products);
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-container");
const totalBox = document.getElementById("total");

function displayCart() {
  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="card">
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <p>Qty: ${item.qty}</p>
        <p>Total: ₹${item.price * item.qty}</p>
        <button onclick="removeItem(${item.id})">Remove</button>
      </div>
    `;
  });

  totalBox.innerText = "Grand Total: ₹" + total;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();
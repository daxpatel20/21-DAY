
document.getElementById("users").innerText = "1,250";
document.getElementById("orders").innerText = "860";
document.getElementById("revenue").innerText = "₹95K";
document.getElementById("growth").innerText = "18%";


const orders = [  {  name: "Dax Patel",  product: "Laptop",  status: "Completed" , price: "₹55,000"},
                  { name: "Rahul Sharma",product: "Phone", status: "Pending",price: "₹25,000"},
                  { name: "Priya Patel", product: "Headphones",status: "Cancelled", price: "₹3,000"},
                  { name: "Aman Verma", product: "Keyboard", status: "Completed", price: "₹2,500"} ];

const tableData = document.getElementById("tableData");

orders.forEach((order) => {

  const row = document.createElement("tr");

  let statusClass = "";

  if(order.status === "Completed"){
    statusClass = "completed";
  }
  else if(order.status === "Pending"){
    statusClass = "pending";
  }
  else{
    statusClass = "cancelled";
  }

  row.innerHTML = `
    <td>${order.name}</td>
    <td>${order.product}</td>
    <td>
      <span class="status ${statusClass}">
        ${order.status}
      </span>
    </td>
    <td>${order.price}</td>
  `;

  tableData.appendChild(row);

});
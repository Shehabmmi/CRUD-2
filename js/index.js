var productName = document.getElementById("ProductName");
var Productprice = document.getElementById("Productprice");
var Productcategory = document.getElementById("Productcategory");
var Productdescription = document.getElementById("Productdescription");
var currentIndex;


var list = [];

// create
function addProduct() {
  var singleProduct = {
    name: productName.value,
    price: Productprice.value,
    category: Productcategory.value,
    description: Productdescription.value,
  };

  list.push(singleProduct);
  clear();
  localStorage.setItem("list", JSON.stringify(list));
  display();
}

// read
if (JSON.parse(localStorage.getItem("list")) != null) {
  list = JSON.parse(localStorage.getItem("list"));
  console.log(list);
  display();
}

// display
function display() {
  var cartona = "";
  for (var i = 0; i < list.length; i++) {
    cartona += `
          <tr>
          <td>${i + 1}</td>
          <td>${list[i].name}</td>
          <td>${list[i].price}</td>
          <td>${list[i].category}</td>
          <td>${list[i].description}</td>
          <td>
          <button onclick="deleteProduct(${i})" class="btn btn-danger mx-2">Delete</button>
          <button onclick="updateProduct(${i})" class="btn btn-warning mx-2">Update</button>
          </td>
      </tr>
          `;
  }
  document.getElementById("t-body").innerHTML = cartona;
}

function addButton() {
  addProduct();
}
// clear inputs
function clear() {
  productName.value = "";
  Productprice.value = "";
  Productcategory.value = "";
  Productdescription.value = "";
}
// Delete
function deleteProduct(index) {
  list.splice(index, 1);
  localStorage.setItem("list", JSON.stringify(list));
  display();
}

// Update
function updateProduct(index) {
  productName.value = list[index].name;
  Productprice.value = list[index].price;
  Productcategory.value = list[index].category;
  Productdescription.value = list[index].description;

  document.getElementById('add-button').classList.add("d-none");
  document.getElementById('update-button').classList.remove("d-none");

  var currentIndex = index;
}

function finalUpdate (){
  var singleProduct = {
    name: productName.value,
    price: Productprice.value,
    category: Productcategory.value,
    description: Productdescription.value,
    
  };

  list.splice(currentIndex, 1, singleProduct);
  localStorage.setItem("list", JSON.stringify(list));
  clear();
  display();
  document.getElementById('update-button').classList.add("d-none")
  document.getElementById('add-button').classList.remove("d-none")

}

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //alert('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const subtotal = product.querySelector(".subtotal span");

  subtotal.textContent = price.textContent * quantity.value;

  return subtotal.textContent;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  
  
  // ITERATION 2
  //... your code goes here
  
  const allProducts = document.querySelectorAll(".product")
  let total = 0;
  
  allProducts.forEach(product => {
    total += parseInt(updateSubtotal(product))
  });
 
  //... your code goes here
 document.querySelector("#total-value span").textContent = total;
  return total;
  // ITERATION 3
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const toRemove = target.parentNode.parentNode;
  toRemove.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductName = document.querySelector(".create-product input[type=text]").value;
  const newProductPrice = document.querySelector(".create-product input[type=number]").value;
  
  const newProduct = document.querySelector(".product").cloneNode(true);
  
  newProduct.querySelector(".name span").innerText = newProductName
  newProduct.querySelector(".price span").textContent = newProductPrice;

  newProduct.querySelector('.btn-remove').addEventListener('click',removeProduct)
  const table = document.querySelector("table");
  table.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach(btn => btn.addEventListener('click', removeProduct))
  //... your code goes here



  const createBtn = document.getElementById("create");
  createBtn.addEventListener('click',createProduct);

});

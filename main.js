let arrOfProducts = [];
let products = document.getElementById('products');
let list = document.getElementById('list');

// Crear un objeto para representar un producto
function createProduct(id, name, price) {
  return { id, name, price };
}

function addItem(id) {
  let message = document.getElementById("message");
  message.classList.add("errorMessage");

  // Obtener la información del producto
  let productInfo = getProductInfoById(id);

  if (productInfo) {
    if (!isProductInCart(productInfo)) {
      // Agregar el objeto del producto a la lista de deseos
      arrOfProducts.push(productInfo);

      // Crear un elemento de lista para mostrar en la lista de deseos
      const li = document.createElement("li");
      li.innerText = `${productInfo.name} - Price: $${productInfo.price}`;
      li.classList.add("cartProducts");

      list.appendChild(li);

      message.innerText = "Item added";
      message.classList.remove("errorMessage");
    } else {
      message.innerText = "This product already exists in the cart";
    }
  } else {
    message.innerText = "Product not found";
  }
}

// Obtener la información del producto por su ID
function getProductInfoById(id) {
  switch (id) {
    case "1":
      return createProduct("1", "Product 1", 10.00);
    case "2":
      return createProduct("2", "Product 2", 15.00);
    case "3":
      return createProduct("3", "Product 3", 20.00);
    default:
      return null; // Devuelve null si no se encuentra el producto
  }
}

// Comprobar si un producto ya está en el carrito
function isProductInCart(product) {
  return arrOfProducts.some((p) => p.id === product.id);
}
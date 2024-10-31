// cart.js

// Función para renderizar el carrito
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.classList.add('buttonCart');
            removeButton.onclick = function () {
                removeFromCart(index);
            };
            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
    }

    // Agregar botón para vaciar el carrito
    const clearCartButton = document.getElementById('clearCartButton');
    clearCartButton.onclick = clearCart; // Llama a la función para vaciar el carrito
    cartItems.appendChild(clearCartButton);
    mostrarTotal();
}

// Función para calcular el precio total de los productos en el carrito
function calcularTotalCarrito() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || []; // Obtiene los productos del carrito desde localStorage
    return cartItems.reduce((total, item) => total + item.price, 0); // Suma los precios de cada producto
}

// Función para mostrar el total en el HTML
function mostrarTotal() {
    const totalElement = document.getElementById('cart-total');
    const total = calcularTotalCarrito();
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index > -1) {
        cart.splice(index, 1); // Elimina el producto en la posición index
        localStorage.setItem('cart', JSON.stringify(cart)); // Actualiza el carrito en localStorage
        mostrarTotal();
        renderCart(); // Vuelve a renderizar el carrito
    }
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem('cart'); // Elimina el carrito de localStorage
    mostrarTotal();
    renderCart(); // Vuelve a renderizar el carrito
}

// Renderizar carrito al cargar la página
renderCart();
mostrarTotal();

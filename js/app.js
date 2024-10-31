// app.js
const products = JSON.parse(localStorage.getItem('products')) || [];

// Función para buscar productos
function searchProducts(query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Producto añadido al carrito');
    }
}
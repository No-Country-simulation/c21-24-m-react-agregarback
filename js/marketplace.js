
// Función para renderizar los productos en el contenedor
function renderProducts(filteredProducts) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<p>No hay productos en esta categoría.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('section');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <p>Categoría: ${product.category}</p>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Función para filtrar productos por categoría y búsqueda
function filterAndRenderProducts() {
    const category = document.getElementById('categorySelect').value;
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Filtrar por categoría
    let filteredProducts = category === "all" ? products : products.filter(product => product.category === category);

    // Filtrar por término de búsqueda
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery)
        );
    }

    // Renderizar productos filtrados
    renderProducts(filteredProducts);
}

// Eventos para filtrar por categoría y búsqueda
document.getElementById('categorySelect')?.addEventListener('change', filterAndRenderProducts);
document.getElementById('searchInput')?.addEventListener('input', filterAndRenderProducts);

// Renderizar productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Verifica si `products` ya existe en otro archivo; si no, obténlo de localStorage
    if (typeof products === 'undefined') {
        products = JSON.parse(localStorage.getItem('products')) || [];
    }
    renderProducts(products);
});

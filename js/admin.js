
// Función para renderizar los productos en la página de administración
function renderAdminProducts() {
    const adminProductContainer = document.getElementById('adminProductContainer');
    adminProductContainer.innerHTML = '';

    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach((product, index) => {
        const productCard = document.createElement('section');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <p>Categoría: ${product.category}</p>
        `;

        // Botón para eliminar el producto
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar Producto';
        deleteButton.onclick = () => removeProduct(index); // Llama a la función para eliminar el producto
        productCard.appendChild(deleteButton);

        adminProductContainer.appendChild(productCard);
    });
}

// Función para eliminar un producto
function removeProduct(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1); // Eliminar el producto en el índice especificado
    localStorage.setItem('products', JSON.stringify(products)); // Actualizar localStorage
    renderAdminProducts(); // Volver a renderizar los productos
}

// Al cargar la página de administración, renderizamos los productos
document.addEventListener('DOMContentLoaded', renderAdminProducts);

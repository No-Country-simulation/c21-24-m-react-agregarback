

// Función para manejar la adición de un producto
document.getElementById('addProductForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;
    const category = document.getElementById('productCategory').value;
    const productMessage = document.getElementById('productMessage');

    if (price <= 0) {
        productMessage.textContent = 'El precio debe ser mayor a cero.';
        productMessage.style.color = 'red';
        return;
    }

    const newProduct = {
        id: Date.now(),
        name,
        description,
        price,
        image,
        category
    };


    products.push(newProduct);

    localStorage.setItem('products', JSON.stringify(products));

    productMessage.textContent = 'Producto agregado exitosamente.';
    productMessage.style.color = 'green';

    document.getElementById('addProductForm').reset();
});

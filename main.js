const productsData = {
    'Смартфони': [
        {name: 'Смартфон Samsung', description: 'Samsung - потужний телефон, що пропонує широкі можливості для виконання різноманітних завдань'},
        { name: 'Смартфон Lenovo', description: 'Lenovo - потужний телефон, що пропонує широкі можливості для виконання різноманітних завдань'},
        {name: 'Смартфон Huawei', description: 'Huawei - потужний телефон, що пропонує широкі можливості для виконання різноманітних завдань'},
        {name: 'Смартфон Apple', description: 'Apple - потужний телефон, що пропонує широкі можливості для виконання різноманітних завдань'},
    ],
    'Ноутбуки': [
        {name: 'Ноутбук HP', description: 'HP - висока продуктивність та вражаючий час автономної роботи'},
        {name: 'Ноутбук ASUS', description: 'ASUS - висока продуктивність та вражаючий час автономної роботи'},
        {name: 'Ноутбук Samsung', description: 'Samsung - висока продуктивність та вражаючий час автономної роботи'},
        {name: 'Ноутбук Apple', description: 'Apple - висока продуктивність та вражаючий час автономної роботи'},
    ],
    'Телевізори': [
        {name: 'Телевізор Samsung', description: 'Телевізор Samsung забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування.'},
        {name: 'Телевізор LG', description: 'Телевізор LG забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування.'},
        {name: 'Телевізор Philips', description: 'Телевізор Philips забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування.'},
        {name: 'Телевізор Sony', description: 'Телевізор Sony забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування.'},
    ],
}

const categoryList = document.querySelector('#categories ul');
const productsList = document.querySelector('#products');
const productsInfo = document.querySelector('#productInfo');
const productDescription = document.querySelector('#productDescription');
const buyButton = document.querySelector('.buyButton');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];
const orderForm = document.getElementById('orderForm');
const viewOrdersBtn = document.getElementById('viewOrdersBtn');

// Function to create category items
function createCategoriesItem() {
    for (const category in productsData) {
        const categoryItem = document.createElement('li');
        categoryItem.textContent = category;
        categoryItem.classList.add('categoryItem');
        let currentCategory = category;
        categoryItem.addEventListener('click', () => createProducts(currentCategory));
        categoryList.appendChild(categoryItem);
    }
}

// Function to display products list for selected category
function createProducts(category) {
    productsList.innerHTML = '';
    productsInfo.style.display = 'none';

    for(const product of productsData[category]) {
        const productItem = document.createElement('li');
        productItem.textContent = product.name;
        productItem.addEventListener('click', () => createProductInfo(product));
        productsList.appendChild(productItem);
    }
}

// Function to display product information
function createProductInfo(product) {
    productDescription.textContent = product.description;
    buyButton.style.display = 'block';
    productsInfo.style.display = 'block';

    buyButton.removeEventListener('click', openModal);
    buyButton.addEventListener('click', () => openModal(product));
}

// Function to open modal
function openModal(product) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const city = document.getElementById('city').value;
        const postOffice = document.getElementById('postOffice').value;
        const quantity = document.getElementById('quantity').value;
        const comment = document.getElementById('comment').value;
        const payment = document.querySelectorAll('input[name="payment"]:checked');

        if (fullName && city && postOffice && quantity && payment.length > 0) {
            let paymentMethods = [];
            payment.forEach(function(item) {
                paymentMethods.push(item.value);
            });

            // Saving the order in localStorage passing the product name
            const order = {
                fullName: fullName,
                city: city,
                postOffice: postOffice,
                paymentMethods: paymentMethods,
                quantity: quantity,
                comment: comment
            };
            saveOrder(order, product.name);
            alert(`Замовлення:
            Продукт: ${product.name}
            ПІБ покупця: ${fullName}
            Місто: ${city}
            Склад Нової пошти: ${postOffice}
            Спосіб оплати: ${paymentMethods.join(", ")}
            Кількість: ${quantity}
            Коментар: ${comment}`);
            closeModal();
        } else {
            alert("Будь ласка, заповніть всі обов'язкові поля та оберіть спосіб оплати.");
        }
    });
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    window.location.href = "index.html";
}

// Saving order in localStorage
function saveOrder(order, productName) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    order.productName = productName;
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Function for deployment/ordering of parts
function toggleDetails(detailsContainer, order) {
    if (detailsContainer.style.display === 'block') {
        detailsContainer.style.display = 'none';
    } else {
        detailsContainer.innerHTML = `<strong>Продукт:</strong> ${order.productName}<br>
            <strong>ПІБ покупця:</strong> ${order.fullName}<br>
            <strong>Місто:</strong> ${order.city}<br>
            <strong>Склад Нової пошти:</strong> ${order.postOffice}<br>
            <strong>Спосіб оплати:</strong> ${order.paymentMethods.join(", ")}<br>
            <strong>Кількість:</strong> ${order.quantity}<br>
            <strong>Коментар:</strong> ${order.comment}`;
        detailsContainer.style.display = 'block';
    }
}

// Function to display user orders
function displayOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    productsList.innerHTML = '';

    if (orders.length === 0) {
        productsList.innerHTML = "<p>Немає замовлень.</p>";
    } else {
        orders.forEach(function(order, index) {
            const orderContainer = document.createElement('div');
            orderContainer.classList.add('order-item');

            const orderInfo = document.createElement('div');
            orderInfo.classList.add('order-info');
            orderInfo.innerHTML = `<strong>Замовлення ${index + 1}:</strong> Дата: ${new Date().toLocaleDateString()}, Ціна: ${calculateTotalPrice(order)}`;
            orderContainer.appendChild(orderInfo);

            const detailsButton = document.createElement('button');
            detailsButton.textContent = "Деталі";
            detailsButton.classList.add('details-button');
            orderContainer.appendChild(detailsButton);

            const detailsContainer = document.createElement('div');
            detailsContainer.classList.add('details-container');
            orderContainer.appendChild(detailsContainer);

            detailsButton.addEventListener('click', function(event) {
                event.stopPropagation();
                toggleDetails(detailsContainer, order);
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Видалити";
            deleteButton.addEventListener('click', function(event) {
                event.stopPropagation();
                deleteOrder(index);
            });
            orderContainer.appendChild(deleteButton);

            productsList.appendChild(orderContainer);
        });
    }
}

// Function to remove an order from the list
function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders();
}

// Function to calculate the total amount of the order
function calculateTotalPrice(order) {
    const price = 100;
    const quantity = parseInt(order.quantity);

    if (!isNaN(quantity) && quantity > 0) {
        return price * quantity;
    } else {
        return "Невірно введена кількість товару";
    }
}

viewOrdersBtn.addEventListener('click', displayOrders);

createCategoriesItem();

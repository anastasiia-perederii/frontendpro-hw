const productsData = {
    'Смартфони': [
        {name: 'Samsung', description: 'Samsung - потужний телефон, що пропонує широкі можливості для виконання різноманітних завдань'},
        { name: 'Lenovo', description: 'Lenovo - потужний телефон, що пропонує широкі можливості для виконання різноманітних завдань'},
        {name: 'Huawei', description: 'Huawei - потужний телефон, що пропонує широкі можливості для виконання різноманітних завдань'},
        {name: 'Apple', description: 'Apple - потужний телефон, що пропонує широкі можливості для виконання різноманітних завдань'},
    ],
    'Ноутбуки': [
        {name: 'HP', description: 'HP - висока продуктивність та вражаючий час автономної роботи'},
        {name: 'ASUS', description: 'ASUS - висока продуктивність та вражаючий час автономної роботи'},
        {name: 'Samsung', description: 'Samsung - висока продуктивність та вражаючий час автономної роботи'},
        {name: 'Apple', description: 'Apple - висока продуктивність та вражаючий час автономної роботи'},
    ],
    'TV': [
        {name: 'Samsung', description: 'Телевізор Samsung забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування.'},
        {name: 'LG', description: 'Телевізор LG забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування.'},
        {name: 'Philips', description: 'Телевізор Philips забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування.'},
        {name: 'Sony', description: 'Телевізор Sony забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування.'},
    ],
}

document.addEventListener('DOMContentLoaded', function () {
    const categoryList = document.querySelector('#categories ul');
    const productsList = document.querySelector('#products');
    const productsInfo = document.querySelector('#productInfo');
    const productDescription = document.querySelector('#productDescription');
    const buyButton = document.querySelector('.buyButton');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const orderForm = document.getElementById('orderForm');

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
        buyButton.addEventListener('click', openModal);
    }

    // Function to open modal
    function openModal() {
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

                alert(`Замовлення:
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

    createCategoriesItem();
});

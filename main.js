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

    // Створення елементів списку категорій
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

    // Відображення списку товарів для вибраної категорії
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

    // Відображення інформації про вибраний товар
    function createProductInfo(product) {
        productDescription.textContent = product.description;
        buyButton.style.display = 'block';
        productsInfo.style.display = 'block';

        buyButton.removeEventListener('click', buyButtonHandler);
        buyButton.addEventListener('click', buyButtonHandler);

        function buyButtonHandler() {
            alert(`Товар ${product.name} куплено!`);
            resetPage();

            buyButton.removeEventListener('click', buyButtonHandler);
        }
    }

    // Скидання стану до вихідного
    function resetPage() {
        productsList.innerHTML = '';
        productsInfo.style.display = 'none';
        buyButton.style.display = 'none';

    }

    createCategoriesItem();
})

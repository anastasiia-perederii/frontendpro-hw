function generateList(array) {
    const list = document.createElement('ul');

    array.forEach(item => {
        const listItem = document.createElement('li');

        if (Array.isArray(item)) {
            const nestedList = generateList(item);
            listItem.appendChild(nestedList);
        } else {
            listItem.textContent = item;
        }

        list.appendChild(listItem);
    });

    return list;
}

const arr = [1, 2, [1.1, 1.2, 1.3], 3];
const htmlList = generateList(arr);

document.body.appendChild(htmlList);

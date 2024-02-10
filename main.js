
const tableBody = document.getElementById('randomNumb');
const length = 10;

Array.from({length}, () => {
    const tr = document.createElement('tr');
    tr.classList.add('line');

    Array.from({length}, () => {
        let myNumb = Math.floor(1 + Math.random() * 100);
        let td = document.createElement('td');
        td.classList.add('column');
            td.innerText = myNumb;
            tr.appendChild(td);
    });
    tableBody.appendChild(tr);
});

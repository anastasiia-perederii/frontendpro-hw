const emojis = ['😊', '😄', '🤩', '🤗', '🤪', '😉'];
let voteCount = Array(emojis.length).fill(0);

function renderPoll() {
    const pollContainer = document.getElementById('poll-container');
    pollContainer.innerHTML = '';

    pollContainer.appendChild(createRow('smiley', emojis));
    pollContainer.appendChild(createRow('vote-count', voteCount.map(String)));
}

function createRow(className, items) {
    const row = createDiv(className + '-row');
    items.forEach((item, index) => {
        const div = createDiv(className, item);
        div.addEventListener('click', () => {
            voteCount[index]++;
            renderPoll();
        });
        row.appendChild(div);
    });
    return row;
}

function createDiv(className, textContent) {
    const div = document.createElement('div');
    div.className = className;
    div.textContent = textContent;
    return div;
}

function addEmojis(newEmojis) {
    newEmojis.forEach(emoji => {
        emojis.push(emoji);
        voteCount.push(0);
    });
    renderPoll();
}

addEmojis(['😉', '😊']);
renderPoll();

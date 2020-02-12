let startStemwijzer = document.getElementById('startStemwijzer');
startStemwijzer.onclick = start;
const pageContent = document.getElementById('pageContent');

function start() {
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.firstChild);
    }
    createElements();
}

function createElements() {
    let div = document.createElement("div");
    div.className = 'container';
    pageContent.appendChild(div);
}
let startStemwijzer = document.getElementById('startStemwijzer');
startStemwijzer.onclick = start;
const pageContent = document.getElementById('pageContent');
let question = 1;
let buttonNames = ["Eens","Oneens","Geen van beide"];
let awnsers = [];

let antwoorden = [];

function start() {
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.firstChild);
    }
    createElements();
    createQuestions(question);
}

function createElements() {
    let div = document.createElement("div");
    div.className = 'container';
    div.id = 'container';
    pageContent.appendChild(div);
    let Ch4 = document.createElement("h4");
    let container = document.getElementById("container");
    Ch4.className = "center";
    Ch4.id = "title";
    container.appendChild(Ch4);
    let Cp = document.createElement('p');
    Cp.id = 'statement';
    container.appendChild(Cp);


    for (let i = 0; i < 3; i++){
        let Btn = document.createElement('button');
        Btn.innerHTML = buttonNames[i];
        Btn.id = buttonNames[i];
        container.appendChild(Btn);
    }
    startStemwijzer.parentNode.removeChild(startStemwijzer);
}

function getButtons() {
    let button1 = document.getElementById(buttonNames[0]);
    let button2 = document.getElementById(buttonNames[1]);
    let button3 = document.getElementById(buttonNames[2]);

    return [button1, button2, button3];
}

function createQuestions() {
    let buttons = getButtons();

    for (let i = 0; i < 3; i++) {
        buttons[i].onclick = antwoordOpslaan;
    }
    loadQuestion();
}

function volgendeVraag() {
    question++;
    loadQuestion(question);
}

function loadQuestion(question){
    let title = document.getElementById('title');
    let statement = document.getElementById('statement');

    statement.innerHTML = subjects[question-1]['statement'];
    title.innerHTML =  question + "." + " " + subjects[question-1]['title'];
}

function vorigeVraag() {
    question--;
    loadQuestion(question);
}

function antwoordOpslaan(obj) {

    if (awnsers[question-1] === undefined){
        awnsers.push(obj.explicitOriginalTarget.innerHTML);
    }
    else{
        awnsers[question-1] = obj.explicitOriginalTarget.innerHTML;
    }
    volgendeVraag();
}


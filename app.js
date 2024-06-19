let enterButton = document.getElementById('enter');
let input = document.getElementById('userInput');
let ul = document.querySelector('ul');
let item = document.getElementsByTagName('li');

let inputLength = () => {
    return input.value.length;
}

let listLength = () => {
    return item.length
}

let createListElement = () => {
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));

    ul.appendChild(li);

    input.value = "";

    let crossOut = () => {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut)

    let dBtn = document.createElement("button");

    dBtn.appendChild(document.createTextNode("X"));

    li.appendChild(dBtn);

    let deleteListItem = () => {
        li.remove();
    }

    dBtn.addEventListener("click", deleteListItem);

}

let addListAfterClick = () => {
    if(inputLength() > 0) {
        createListElement();
    }
}

let addListAfterKeypress = (event) => {
    if(inputLength() > 0 && event.which ===13) {
        createListElement();
    }
}

enterButton.addEventListener('click', addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress)
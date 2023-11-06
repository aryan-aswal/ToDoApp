let mainArray = [];

let textArea= document.querySelector('textarea');
let updatedList = document.querySelector('.list');

textArea.addEventListener('keypress', (e)=>{
    let mainObject = {};
    if(e.key == 'Enter') {
        e.preventDefault();
        let list_item_value = textArea.value;

        let list_item = document.createElement('p');
        list_item.setAttribute('class','list-item');
        list_item.innerText = list_item_value;

        let checkbox = document.createElement('input')
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('class','checkbox');

        let spanElement = document.createElement('span');
        spanElement.innerText = 'x';
        spanElement.setAttribute('class','cross');

        let div_buttons = document.createElement('div');
        div_buttons.setAttribute('class','buttons');
        div_buttons.append(checkbox, spanElement);

        let list_item_container = document.createElement('div');
        list_item_container.setAttribute('class','list-item-container bottom-border')
        list_item_container.append(list_item, div_buttons);

        updatedList.append(list_item_container);
        textArea.value = "";

        mainObject.task = list_item_value;
        mainArray.push(mainObject);
        setData();
    }
})

document.addEventListener('change',(event)=>{
    if(event.target.checked && event.target.classList.contains('checkbox')) {
        event.target.parentElement.parentElement.querySelector('.list-item').style.textDecoration = 'line-through';
    } else {
        event.target.parentElement.parentElement.querySelector('.list-item').style.textDecoration = 'none';
    }
})

document.addEventListener('click',(event)=>{
    if(event.target.className == 'cross') {
        let element = event.target.parentElement.parentElement.parentElement;
        element.removeChild(event.target.parentElement.parentElement);
    }
})
// Storing Data in LocalStorage

function setData() {
    localStorage.setItem('key',JSON.stringify(mainArray));
}
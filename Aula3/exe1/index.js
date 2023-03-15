const button = document.querySelector('button');
const ul = document.querySelector('ul');
const array = new Array();
button.addEventListener('click', ()=>{
    const value = document.querySelector('input').value;
    array.push(value);
    array.sort();
    ul.innerHTML = null;
    for (let i = 0; i < array.length; i++){
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = array[i];
    }
});
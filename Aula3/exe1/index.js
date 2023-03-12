const array = new Array();
const ul = document.querySelector('ul');
let c = 0;



function addElemento(array){
    ul.innerHTML = null;
    for (let i = 0; i < array.length; i++){
        const addElemento = document.createElement('li');
        const button = document.createElement('button');
        addElemento.id = c;
        c++;
        ul.appendChild(addElemento);
        addElemento.innerHTML = array[i] + ' ';
        button.innerHTML = 'apagar';
        addElemento.appendChild(button);   
    }
}




document.querySelector('button').addEventListener('click', ()=>{
    const input = document.querySelector('#value').value;
    array.push(input);
    array.sort();
    addElemento(array);
    console.log(array);
});
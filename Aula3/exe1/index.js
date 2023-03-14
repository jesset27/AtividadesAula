const array = new Array();
const ul = document.querySelector('ul');
let c = 0;

function addElemento(array) {
    ul.innerHTML = null;
    for (let i = 0; i < array.length; i++) {
      const addElemento = document.createElement('li');
      const buttonUp = document.createElement('button');
      const buttonDown = document.createElement('button');
      addElemento.id = c;
      c++;
      ul.appendChild(addElemento);
      addElemento.innerHTML = array[i] + ' ';
      buttonUp.innerHTML = '↑';
      buttonUp.addEventListener('click', () => {
        if (i > 0) {
          [array[i], array[i-1]] = [array[i-1], array[i]];
          addElemento.parentNode.insertBefore(addElemento, addElemento.previousSibling);
        }
      });
      addElemento.appendChild(buttonUp);
      buttonDown.innerHTML = '↓';
      buttonDown.addEventListener('click', () => {
        if (i < array.length-1) {
          [array[i], array[i+1]] = [array[i+1], array[i]];
          addElemento.parentNode.insertBefore(addElemento.nextSibling, addElemento);
        }
      });
      addElemento.appendChild(buttonDown);
      const button = document.createElement('button');
      button.innerHTML = 'apagar';
      button.addEventListener('click', () => {
        array.splice(i, 1);
        addElemento.remove();
      });
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

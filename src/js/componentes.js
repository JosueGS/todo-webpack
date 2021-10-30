import { Todo } from '../classes';
import { todoList } from '../index';
//Referencias Html

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDelAll = document.querySelector('.clear-completed');
const elFilter = document.querySelector('.filters');
const anchorFilter = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) =>{

    const list = `<li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
                    <div class="view">
                        <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
                        <label>${todo.tarea}</label>
                        <button class="destroy"></button>
                    </div>
                    </li>`;

    const div = document.createElement('div');

    div.innerHTML = list;

    divTodoList.append(div.firstElementChild);
    return div;
    // ul.innerHTML = list

}

txtInput.addEventListener('keyup', (e) => {

    if (e.keyCode === 13 && txtInput.value.length > 0) {
        const nuevaTarea = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevaTarea);

        crearTodoHtml(nuevaTarea);
        
        txtInput.value = '';
    }
    
});

divTodoList.addEventListener('click', (event)=>{

    const nombreElement  = event.target.localName;
    const todoElement =  event.target.parentElement.parentElement;
    const getId = todoElement.getAttribute('data-id');

    if (nombreElement.includes('input')) {
        todoList.marcarCompletado(getId);
        todoElement.classList.toggle('completed');

    }

    if (nombreElement.includes('button')) {
        todoList.eliminarTodo(getId);
        divTodoList.removeChild(todoElement);
    }
});


btnDelAll.addEventListener('click', ()=>{
    todoList.eliminarCompletados();
 
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const element = divTodoList.children[i];
        
        if (element.classList.contains('completed')) {
            divTodoList.removeChild(element)
        }
    }

});

elFilter.addEventListener('click', (event)=>{

    const filtro = event.target.text;

    if (!filtro) { return; }

    anchorFilter.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){

        elemento.classList.remove('hidden');
        const completLi = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                    if(completLi){
                        elemento.classList.add('hidden');
                    }
                break;
            case 'Completados':
                    if (!completLi) {
                        elemento.classList.add('hidden');
                    }
                break;
        }
    }

    

})
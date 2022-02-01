import './App.css';
import React from "react";


function App() {

  let tasks = ['Я хочу сделать список задач'];

  const startApp = () => {
    function renderTodo(todo){
      const list = document.querySelector('.tasksList');
      list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input data-key="${todo.id}" type="checkbox"/>
       <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
        </button>
    </li>
  `);
    }

    function addTodo(text){
      const todo = {
        text,
        checked: false,
        id : Date.now()
      };

      tasks.push(todo);
      renderTodo(todo);
    };

    function toggleDone(key){
      const index = tasks.findIndex(item => item.id === Number(key));
      tasks[index].checked = !tasks[index].checked ;
      const item = document.querySelector(`[data-key ='${key}']`);

      if (tasks[index].checked){
        item.classList.add('done');
      }else {
        item.classList.remove('done');
      }

    }

    function deleteTodo(key){
      tasks = tasks.filter(item=> item.id !== Number(key));
      const item = document.querySelector(`[data-key = '${key}']`);
      item.remove();

      const list = document.querySelector('.tasksList');
      if(tasks.length === 0 ) list.innerHTML = '';
    }
    const form = document.querySelector('.js-form');

    form.addEventListener('submit', event =>{
      event.preventDefault();
      const input = document.querySelector('.js-todo-input');
      const text = input.value.trim();

      if (text !== ''){
        addTodo(text);
        input.value = '';
        input.focus();
      }
    });
// to mark the todos as compeleted
    const list = document.querySelector('.tasksList');

    list.addEventListener('click', event =>{
      if(event.target.classList.contains('js-tick')){
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
      }

      //to delete the items
      if(event.target.classList.contains('js-delete-todo')){
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
      }
    });
  }


  return (
    <div className="container">
      <button onClick={startApp}>Start App</button>

      <ul className="tasksList"></ul>

      <form className="js-form">
        <input autofocuse type="text" placeholder="Write a task you gotta do" className="js-todo-input" />

        <button type="submit" value="Add" className="btn btn-outline-dark" >
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z"/><path d="M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"/><rect height="2" width="8" x="7" y="9"/><polygon points="7,12 7,14 15,14 15,12 12,12"/><rect height="2" width="8" x="7" y="15"/></g></g></svg>
        </button>

      </form>
    </div>
);
}

export default App;

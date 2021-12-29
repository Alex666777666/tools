import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';

export const initTodoListHandlers = () => {
  const createBtnELem = document.querySelector('.create-task-btn');
  createBtnELem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};

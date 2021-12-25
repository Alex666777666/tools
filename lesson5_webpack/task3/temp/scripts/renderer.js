import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getTasksList } from './taskGateway.js';
const listElem = document.querySelector('.list');

const compareTasks = (a, b) => a.done - b.done;

const createCheckbox = _ref => {
  let {
    done,
    id
  } = _ref;
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  return checkboxElem;
};

const createListItem = _ref2 => {
  let {
    text,
    done,
    id
  } = _ref2;
  const listItemElement = document.createElement('li');
  listItemElement.classList.add('list__item');
  const checkboxElem = createCheckbox({
    done,
    id
  });

  if (done) {
    listItemElement.classList.add('list__item_done');
  }

  listItemElement.append(checkboxElem, text);
  return listItemElement;
};

export const renderTasks = () => {
  const tasksList = getTasksList();
  listElem.innerHTML = '';
  tasksList.then(elem => elem.sort(compareTasks).map(createListItem)).then(elem => listElem.append(...elem));
};
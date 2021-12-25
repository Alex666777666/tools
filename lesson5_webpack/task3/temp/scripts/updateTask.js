function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { renderTasks } from './renderer.js';
import { getTasksList, updateTask } from './taskGateway.js'; // eslint-disable-next-line consistent-return

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return null;
  }

  const tasksList = getTasksList('tasksList');
  tasksList.then(el => el.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      updateTask(task.id, _objectSpread(_objectSpread({}, task), {}, {
        done,
        finishDate: done ? new Date().toISOString() : null
      })).then(() => renderTasks());
      return _objectSpread(_objectSpread({}, task), {}, {
        done,
        finishDate: done ? new Date().toISOString() : null
      });
    }

    return task;
  }));
};
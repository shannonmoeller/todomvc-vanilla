import 'todomvc-common/base.js';
import TodosAppElement from '../el/todos-app/todos-app.js';
import TodosItemElement from '../el/todos-item/todos-item.js';

customElements.define('todos-app', TodosAppElement);
customElements.define('todos-item', TodosItemElement);

import TodosAppElement from '../el/todos-app/todos-app.js';
import TodosActionsElement from '../el/todos-actions/todos-actions.js';
import TodosItemElement from '../el/todos-item/todos-item.js';
import TodosNewElement from '../el/todos-new/todos-new.js';

customElements.define('todos-app', TodosAppElement);
customElements.define('todos-actions', TodosActionsElement);
customElements.define('todos-item', TodosItemElement);
customElements.define('todos-new', TodosNewElement);

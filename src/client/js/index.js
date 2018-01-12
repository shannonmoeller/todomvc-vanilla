class TodoApp extends HTMLElement {
	connectedCallback() {
		console.log(JSON.parse(this.getAttribute('props')));
	}
}

customElements.define('todo-app', TodoApp);

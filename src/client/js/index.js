import renderApp from '../../shared/templates/app.html.js';

class TodoApp extends HTMLElement {
	connectedCallback() {
		this.props = JSON.parse(this.getAttribute('props'));

		this.render();
	}

	render() {
		console.log(renderApp(this.props));
	}
}

customElements.define('todo-app', TodoApp);

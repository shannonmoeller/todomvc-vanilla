import { html } from '../utils/html.js';

export default (props) => html`
	<todo-app props="${props}">
		${props}
	</todo-app>
`;

import { html } from '../utils/html.js';

export default ({ title, body }) => html`
	<!doctype html>
	<html lang="en">
		<head>
			<title>${title}</title>
			<script type="module" src="/client/js/index.js"></script>
			<link rel="stylesheet" href="/client/css/index.css" />
		</head>
		<body>
			${body}
		</body>
	</html>
`;

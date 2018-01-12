import { html } from 'apply-html';

export default ({ title, body }) => html`
	<!doctype html>
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<title>${title} • TodoMVC</title>

			<script type="module" src="/client/js/index.js"></script>

			<link rel="stylesheet" href="node_modules/todomvc-common/base.css" />
			<link rel="stylesheet" href="node_modules/todomvc-app-css/index.css" />
			<link rel="stylesheet" href="/client/css/index.css" />
		</head>
		<body>
			${body}

			<script src="node_modules/todomvc-common/base.js"></script>
		</body>
	</html>
`;

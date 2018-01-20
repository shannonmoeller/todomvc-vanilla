import { html } from 'apply-html';

export default ({ title, head, body }) => html`
	<!doctype html>
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<title>${title} • TodoMVC</title>

			${head}
		</head>
		<body>
			${body}
		</body>
	</html>
`;

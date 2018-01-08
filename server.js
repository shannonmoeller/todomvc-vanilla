const req = require('@std/esm')(module);
const app = req('./src/server').default;
const port = Number(process.env.PORT) || 3000;

console.log(app.listen(port).address());

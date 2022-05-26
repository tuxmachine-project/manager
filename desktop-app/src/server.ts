const express = require('express');
const port = 8080;

module.exports = () => {
	const app = express();

	app.use(express.static(require('path').join(__dirname, "../app/web")));
	
	app.listen(port, () => {
		console.log(`Listening at http://localhost:${port}`);
	});
};
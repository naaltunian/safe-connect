const app = require('./app');
const port = 5000;

// Uncomment below to put server down for maintenance
// app.use((req, res, next) => {
// 	res.status(503).send('Site is currently down. Check back soon!');
// });

//  Listen on port production or dev port
app.listen(port, () => {
	console.log('Server is running on port ' + port);
});

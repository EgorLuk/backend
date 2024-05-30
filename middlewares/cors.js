
const allowedCors = [
	'https://practicum.yandex.ru',
	'https://students-project.ru',
	'http://localhost:3000',
	'http://localhost:3001',
	'https://yp-frontend.nomorepartiesco.ru',
	'http://yp-frontend.nomorepartiesco.ru',
	'https://back.nomorepartiesco.ru',
	'http://back.nomorepartiesco.ru'
];
// const allowedCors = [
// 	'http://localhost:3000',
// 	'http://localhost:3001',
// 	'https://back.nomorepartiesco.ru',
// 	'http://back.nomorepartiesco.ru'
// ];
// const allowedCors = [
// 	'https://yp-frontend.nomorepartiesco.ru'
// ];
function cors(req, res, next) {
	const { origin } = req.headers;

	if (allowedCors.includes(origin)) {
		res.header('Access-Control-Allow-Origin', origin);
	}
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
	);
	next();
}

module.exports = cors;

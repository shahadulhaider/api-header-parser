const express = require('express');
const router = express.Router();

router.route('/whoami').get((req, res) => {
	const ip = 
		req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;

	res.send({
		ipaddress: ip,
		language: req.headers['accept-language'],
		software: req.headers['user-agent']
	});
});


module.exports = router;

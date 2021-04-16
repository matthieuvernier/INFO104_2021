const wiki = require('wikijs').default;

wiki()
	.page('Chile')
	.then(page => page.summary())
	.then(console.log);
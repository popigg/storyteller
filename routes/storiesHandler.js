module.exports = exports = function(app) {

	app.get('/', function(req, res) {
		return res.render('index', { "name" : 'world' });
	});

	app.get('/prueba1', function (req, res) {		
		var firstN = Math.floor(Math.random() * 1000) + 1;
		var secondN = Math.floor(Math.random() * 1000) + 1;
		var resultSum = firstN + secondN;	

		return res.render('prueba1', { 'firstN' : firstN,  'secondN': secondN, 'resultSum': resultSum });
	});

	app.post('/prueba1', function (req, res) {
		var inputSum = req.body.inputSum;
		var resultSum = req.body.resultSum;
		var firstN = req.body.firstN;		
		var secondN = req.body.secondN;		
	

		return res.render('prueba1', 
					{ 
						'firstN' : firstN,  
						'secondN': secondN, 
						'resultSum': resultSum, 
						'inputSum': inputSum 
					}
				);
	});

	app.get('/prueba2', function (req, res) {
				
		return res.render('prueba2', {});
	});

	app.post('/prueba2', function (req, res) {
		var inputResult = req.body.result;
		var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme, vivía un hidalgo de los de ...";

		var result = '';
		for (var i = text.length - 1; i >= 0; i--) {
			result += text[i];			
		};

		if (result == inputResult) {
			var success = true;
		} else {
			var success = false;
		}

		return res.render('prueba2', {success: success});
	});

}
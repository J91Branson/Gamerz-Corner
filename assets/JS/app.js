const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b4a0d8896fmshfa4245288bd391dp132054jsn34834f843507',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};


// Call of Duty call
fetch('https://opencritic-api.p.rapidapi.com/game/13349', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
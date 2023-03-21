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

// Halo 5 call
fetch('https://opencritic-api.p.rapidapi.com/game/1513', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// Company of Heroes 3 call
fetch('https://opencritic-api.p.rapidapi.com/game/14319', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

// Metroid Prime remastered
fetch('https://opencritic-api.p.rapidapi.com/game/14280', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
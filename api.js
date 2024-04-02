// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://myhealthbox.p.rapidapi.com/search/updatedDocuments?sd=2020-06-01&c=us&l=en',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '85b4f940efmshd3c582c78562612p1e9c6cjsnbdb9c273c549',
// 		'X-RapidAPI-Host': 'myhealthbox.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


const url = 'https://iterar-mapi-us.p.rapidapi.com/api/reserpine/substances.json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '85b4f940efmshd3c582c78562612p1e9c6cjsnbdb9c273c549',
		'X-RapidAPI-Host': 'iterar-mapi-us.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

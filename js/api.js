console.log('Aprendí git');

document.addEventListener('DOMContentLoaded', init);
function init(){
	let url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=7';
	fetch(url)
	.then(response => response.json())
	.then(content => {
		console.log(content);
		let img_header = document.getElementsByClassName('img_header');
		let caracter = document.getElementsByClassName('caracter');
		let quote  = document.getElementsByClassName('quote');
		let i = 0;
		do{
			img_header[i].src = content[i].image;
			caracter[i].innerText = content[i].character;
			quote[i].innerText = content[i].quote;
			i++;
		}while(i<=1);

	});
	fetch(url)
	.then(response => response.json())
	.then(content => {
		let caracter2 = document.getElementsByClassName('caracter2');
		let quote2  = document.getElementsByClassName('quote2');
		console.log(quote2[0]);
		i = 0;
		do{
			caracter2[i].innerText = content[i].character;
			quote2[i].innerText = content[i].quote;
			console.log(i);
			i++;
		}while(i<=7);

	});
	
}


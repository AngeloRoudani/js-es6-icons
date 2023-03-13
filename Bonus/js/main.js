/*
*/


const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const containerDom = document.querySelector('.container_main');
const selectDom = document.getElementById('card-type');

//ascoltatore di eventi select

selectDom.addEventListener("change", function () {
    let current = "";
    containerDom.innerHTML = current;
    

    if (selectDom.value == 'all') {
        
        current = generateCard(cards);

    } else if (selectDom.value == 'animal') {
        
        current = generateCard(orangeCards);

    } else if (selectDom.value == 'vegetables') {
        
        current = generateCard(greenCards);

    } else if (selectDom.value == 'user') {
        
        current = generateCard(blueCards);

    }
}
);

//Funzione che genera  le card

function generateCard (array) {
    for (let i = 0; i <= array.length -1; i++) {
        const cardElement = array[i];

        const element = document.createElement('i');
        element.classList.add('fa-solid');
        element.classList.add(cardElement.prefix + cardElement.name);
        element.classList.add('icon');
        element.style.color = cardElement.color

        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card');
        cardWrapper.append(element);
        cardWrapper.append(cardElement.name);

        containerDom.append(cardWrapper);

    }
}

//funzioni filtra colori

let newColorAlfa = randomColor ();
let newColorBeta = randomColor ();
let newColorGamma = randomColor ();

const blueCards = cards.filter(element =>{
    if (element.color == 'blue') {
		element.color = `#${newColorAlfa}`;
        return true;
    } else {
        return false;
    }
});

const greenCards = cards.filter(element =>{
    if (element.color == 'green') {
		element.color = `#${newColorBeta}`;
        return true
    } else {
        return false
    }
});

const orangeCards = cards.filter(element =>{
    if (element.color == 'orange') {
		element.color = `#${newColorGamma}`;
        return true
    } else {
        return false
    }
});

//colori random

function randomColor () {
    const letterNumberArray = 'abcdef0123456789';
    let newColor = '';

    for (let i = 0; i < 6; i++) {
        newColor += letterNumberArray.charAt(Math.floor(Math.random() * letterNumberArray.length));
    }
    return newColor;
}





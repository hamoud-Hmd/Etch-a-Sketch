const gridContainer = document.getElementById('grid');
const clearBtn = document.querySelector('.clear');
const blackColor = document.querySelector('.blackColor');
const randomColor = document.querySelector('.randomColor');
const defaultValue = 16;
let NumSquares = defaultValue;
let reseted = false;

clearBtn.addEventListener('click', () => {
	reseted = true;
	colorDivs();
	let num = Number(prompt('How many squares per side do you want'));
	if (num > 0 && num <= 100) {
		NumSquares = num;
	}
	console.log(NumSquares);
	gridContainer.innerHTML = '';
	console.log(gridContainer);

	divCreator();
	colorDivs();
	console.log(gridContainer);
});

blackColor.addEventListener('click', () => {
	console.log(blackColor.classList.contains('current'));
	blackColor.classList.add('current');
	randomColor.classList.remove('current');
});

randomColor.addEventListener('click', () => {
	console.log(randomColor.classList.contains('current'));
	randomColor.classList.add('current');
	blackColor.classList.remove('current');
});
const divCreator = () => {
	gridContainer.style['grid-template-columns'] = `repeat(${NumSquares},1fr)`;
	for (let i = 0; i < NumSquares * NumSquares; i++) {
		let div = document.createElement('div');
		gridContainer.append(div);
	}
	console.log(NumSquares);
	reseted = false;
};

const colorDivs = () => {
	const divs = gridContainer.querySelectorAll('div');
	if (reseted) {
		for (const div of divs) {
			div.style.backgroundColor = '#ffffff';
		}
		reseted = false;
	}

	for (const div of divs) {
		div.addEventListener('mouseover', setRandomColor.bind(null, div));
	}
};
const getColor = () => {
	let color = getRandomColor();
	if (blackColor.classList.contains('current')) {
		color = '#000';
	}

	return color;
};
const getRandomColor = () => {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const setRandomColor = el => {
	el.style.backgroundColor = `${getColor()}`;
};

divCreator();
colorDivs();

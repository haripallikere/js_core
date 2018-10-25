var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('sec');

function setDate() {
	const date = new Date();
    const minute = date.getMinutes();
    const hour = date.getHours();
	const second = date.getSeconds();
	const hourDeg = (hour * 30) + (0.5 * minute); 
	const minuteDeg = (minute * 6) + (0.1 * second); 
	const secondDeg = second * 6; 

	hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
	minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
	secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

	setInterval(setDate, 1000);
};

setDate();
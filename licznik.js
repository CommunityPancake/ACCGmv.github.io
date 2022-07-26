const days = document.getElementById('dni');
const hours = document.getElementById('godziny');
const minutes = document.getElementById('minuty');
const seconds = document.getElementById('sekundy');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`July 28 2022  ${currentYear + 1} 18:00:00`);

// 8 linijka do zmiany daty i godziny 
function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	days.innerHTML = d;
	hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 100);


let granDiv = document.querySelector('.grandiv');
let divEnd = document.querySelector('.div-end');
let results = document.querySelector('.results');
let selectedRating = 0;
let ratingState =
	document.querySelectorAll('.rating-state');
let submitbutton = document.querySelector('.sumit');

divEnd.style.display = 'none';

ratingState.forEach(function (button, index) {
	button.addEventListener('click', function () {
		ratingState.forEach((btn) => btn.classList.remove('active'));
		this.classList.add('active');
		return selectedRating = index + 1;

	});
});

submitbutton.addEventListener('click', function () {
	if (!selectedRating) {
		alert('please select one');
		divEnd.style.display = 'none';

	} else {
		granDiv.style.display = 'none';
		divEnd.style.display = 'block';
	}

	results.textContent = `You selected ${selectedRating} out of 5`;
});


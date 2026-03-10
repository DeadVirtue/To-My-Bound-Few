document.addEventListener("DOMContentLoaded", () => {
	console.log("JS is running.");

	const buttons = document.querySelectorAll('.nav-button');
	const cards = document.querySelectorAll('.friend-section');
	// friend buttons
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const id = button.dataset.friend;

			// hide all cards
			cards.forEach(card => {
				card.classList.remove('active');
			});

			// show selected card
			const target = document.getElementById(id + '-card');
			if (target) {
				target.classList.add('active');
			} else {
				console.log("Card not found:", id + '-card');
			}
		});
	});
});

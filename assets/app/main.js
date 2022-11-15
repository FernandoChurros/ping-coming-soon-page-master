const btn = document.querySelector('#btn');
const input = document.querySelector('#input-email');
const error = document.querySelector('#msg-error');

btn.addEventListener( 'click', () => {

	const inputVal = input.value;
	const isValidEmail = inputVal.includes('@');

	if (isValidEmail) {
		error.classList.add('hidden');
	} else {
		error.classList.remove('hidden');
	}
} )
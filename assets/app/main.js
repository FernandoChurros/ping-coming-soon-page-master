const btn = document.querySelector('#btn');
const input = document.querySelector('#input-email');
const error = document.querySelector('#msg-error');

btn.addEventListener( 'click', () => {

	const inputArray = input.value.split('');
	const isValidEmail = inputArray.find( el => el == '@' );

	if (isValidEmail) {
		error.classList.add('hidden');
	} else {
		error.classList.remove('hidden');
	}
} )
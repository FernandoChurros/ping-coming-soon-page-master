const btn = document.querySelector('#btn');
const input = document.querySelector('#input-email');
const error = document.querySelector('#msg-error');

btn.addEventListener( 'click', () => {

	let newInput = input.value.split('');

	if (newInput.find( el => el == '@' ) == '@') {
		error.classList.add('hidden');
	} else {
		error.classList.remove('hidden');
	}
} )
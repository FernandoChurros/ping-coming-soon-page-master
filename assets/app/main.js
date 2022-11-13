const btn = document.querySelector('#btn');
const input = document.querySelector('#input-email');
const error = document.querySelector('#msg-error');

btn.addEventListener( 'click', () => {
	if (input.value == '') {
		error.classList.remove('hidden');
	} else {
		error.classList.add('hidden');
	}
} )
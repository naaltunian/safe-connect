console.log('hello from JS');

$(function() {
	$('#login').on('click', function(event) {
		event.preventDefault();
		// const user = new User(req.body);
		const email = document.querySelector('#emailLogin').value;
		const password = document.querySelector('#passwordLogin').value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		console.log(email, password);

		if (!email || !password) {
			alert('Please fill out all fields.');
		} else if (!filter.test(email)) {
			alert('Please provide a valid email address');
		} else {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', '/users/login', true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(
				JSON.stringify({
					email: email,
					password: password
				})
			);
			xhr.onreadystatechange = () => {
				window.location = '/data.html';
			};
		}
	});
});

$(function() {
	$('#getcontacts').on('click', function(event) {
		event.preventDefault();
		// const user = new User(req.body);

		
	});
});



const renderContacts = () => {
	//   -  using the .appendChild().
	let li = document.createElement('li');
	li.className = 'contacts';
	li.innerText = ;
	document.querySelector('#contact-div ul').appendChild(li);
};


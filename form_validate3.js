const userName = document.registration.username;
// const email = document.registration.email;
const phone = document.registration.phonenumber;
const password = document.registration.password;
const country = document.registration.country;
const gender = document.registration.gender;
const engLang = document.registration.english;
const lugLang = document.registration.luganda;
const form = document.registration.signup;

const min = 3;
const max = 25;

// alphabet =/^[A-Za-z]+$/
// numbers =/^[0-9]+$/
// email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const checkPhone = () => {
	// let alphabet = /^[A-Za-z]+$/;
	let digits = /^\d{10}$/;
	let format = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	// let format2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	// check if phone is empty
	if (phone.value === "") {
		phone.style.border = "3px solid red";
		phone.focus();
	}

	// check for numbers
	if (phone.value.match(format)) {
		phone.style.border = "3px solid green";
		date.focus();
	} else {
		phone.style.border = "3px solid red";
		phone.focus();
	}
};

// Checking passwords data
const checkPasswd = () => {
	// let pass_check = /^[A-Za-z]\w{7,14}$/;
	// let pass_check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	let pass_check = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

	if (password.value === "") {
		phone.style.border = "3px solid red";
		phone.focus();
	}

	// check for numbers
	if (password.value.match(pass_check)) {
		password.style.border = "3px solid green";
		// date.focus();
	} else {
		password.style.border = "3px solid red";
		password.focus();
	}
};

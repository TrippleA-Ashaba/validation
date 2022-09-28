const userName = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPwd = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");
const min = 3;
const max = 25;
const firstName = document.querySelector("#firstname");
const telephone = document.querySelector("#phonenumber");

// alphabet =/^[A-Za-z]+$/
// numbers =/^[0-9]+$/
// email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Checking Username data
// Check alphanumeric
const checkUserName = () => {
	let user_name = userName.value.trim();

	// regular expression or regexp. Used to manipulate stings
	let alpha = /^[0-9a-zA-Z]+$/;

	if (user_name === "") {
		alert("User Name is Empty!");
		userName.style.border = "3px solid red";
		return false;
	}

	if (user_name.length < min || user_name.length > max) {
		alert("User Name chars not in range");
		userName.style.border = "3px solid red";
		return false;
	}

	if (user_name.match(alpha)) {
		firstName.focus();
		return true;
	} else {
		userName.style.border = "3px solid red";
		alert("User name does not contains special chars");
	}
};

// Check first name
const checkFirstName = () => {
	let first_name = firstName.value.trim();
	let alphabet = /^[A-Za-z]+$/;

	if (first_name === "") {
		alert("First Name should not be blank!");
		firstName.style.border = "3px solid red";
		return false;
	}

	if (first_name.length < min || first_name.length > max) {
		alert("First name cannot be less than 3 chars or more than 25 chars");
		firstName.style.border = "3px solid red";
		return false;
	}

	if (first_name.match(alphabet)) {
		telephone.focus();
		console.log(first_name);
		return true;
	} else {
		firstName.style.border = "3px solid red";
		alert("First Name has to be alphabetical");
		return false;
	}
};

// Checking Email
const checkEmail = () => {
	let email = emailEl.value;
	let alpha_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (email == "") {
		alert("Email can't be left empty");
		emailEl.style.border = "3px solid red";
		return false;
	}
	if (email.match(alpha_email)) {
		password.focus();
		return true;
	} else {
		emailEl.style.border = "3px solid red";
		alert("Put Valid Email");
		return false;
	}
};

// Checking passwords data
const checkPasswd = () => {
	let pass_wrd = password.value;
	let confirm_pwd = confirmPwd.value;

	if (pass_wrd == "" || confirm_pwd == "") {
		alert("Password cannot be empty");
		password.style.border = "3px solid red";
		confirmPwd.style.border = "3px solid red";
		return false;
	}

	if (pass_wrd != confirm_pwd) {
		alert("Passwords do not match!!");
		password.style.border = "3px solid red";
		confirmPwd.style.border = "3px solid red";

		return false;
	}
};

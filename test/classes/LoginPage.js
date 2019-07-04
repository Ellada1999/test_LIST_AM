import BasePage from './BasePage';

class LoginPage extends BasePage {
	open() {
		super.open('login');
	}

	get username() { return $('#_idyour_email'); }
	get password() { return $('#_idpassword'); }
	get submit() { return $('#loginaction__form_action0'); }
	get flash() { 
	//	let errorMessage = $$('table tbody tr');
	//	errorMessage.waitForVisible(); 
	//	return errorMessage;
		return $$('table tbody tr');
	}

}

export default new LoginPage();

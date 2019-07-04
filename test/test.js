import {expect} from 'chai';
import LoginPage from './classes/LoginPage';

describe('Login form', () => {
        it('should not arrow login with invalid username', () => {
                LoginPage.open();

                LoginPage.username.addValue('foooooo');
                LoginPage.password.addValue('barrrrr');

		LoginPage.submit.click();

		//$('table tbody tr').waitForDisplayed(undefined, true);

		const error = $('table tbody tr').getText();

		expect(error).to.equal('Տվյալ էլ փոստի հասցեն սխալ է:')

        });

});

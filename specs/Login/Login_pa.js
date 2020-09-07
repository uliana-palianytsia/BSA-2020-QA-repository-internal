const AuthPage = require('./Login_po');
const login = new AuthPage();

class AuthActions {
    
    openAuthPage() {
        login.authPageButton.waitForDisplayed(2000);
        login.authPageButton.click();
    }

    openSignInBox() {
        login.signInBoxButton.waitForDisplayed(2000);
        login.signInBoxButton.click();
    }

    enterEmail(value) {
        login.emailInput.waitForDisplayed(2000);
        login.emailInput.clearValue();
        login.emailInput.setValue(value);


    }

    enterPassword(value) {
        login.passwordInput.waitForDisplayed(2000);
        login.passwordInput.clearValue();
        login.passwordInput.setValue(value);

    }

    pressLoginButton() {
        login.loginButton.waitForDisplayed(2000);
        login.loginButton.click();
    }

    pressSelectCompanyButton() {
        login.selectCompanyButton.waitForDisplayed(2000);
        login.selectCompanyButton.click();
    }

    pressSignInButton() {
        // browser.pause(3000);
        login.signInButton.waitForDisplayed(2000);
        login.signInButton.click();
    }
}
module.exports = AuthActions;
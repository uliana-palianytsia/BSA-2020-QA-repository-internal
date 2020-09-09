const assert = require('assert');
const variables = require('./testData.json');

const AuthActions = require('./Login/Login_pa');
const authSteps = new AuthActions();

function userLogin(email, password) {
    authSteps.openAuthPage();
    authSteps.openSignInBox();
    authSteps.pressSignInButton();
    authSteps.enterEmail(email);
    authSteps.pressLoginButton();
    authSteps.pressSelectCompanyButton();
    authSteps.enterPassword(password);
    authSteps.pressSignInButton();
}

describe('Questionnaire Tests', () => {
    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(variables.appUrl);
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it('Questionnaire CRUD Workflow', () => {
        userLogin(variables.emailCO, variables.passwordCO);
    });
});

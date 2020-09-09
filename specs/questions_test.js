const assert = require('assert');
const variables = require('./testData.json');

const AuthActions = require('./Login/Login_pa');
const authSteps = new AuthActions();

const QuestionsActions = require('./Questions/Questions_pa');
const questionsSteps = new QuestionsActions();

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
function addQuestion() {
    questionsSteps.openQuestionsPage();
    questionsSteps.addNewQuestions();
}
describe('Questions creation tests', () => {
    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(variables.appUrl);
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it('Questions Workflow', () => {
        userLogin(variables.emailCO, variables.passwordCO);
        addQuestion();
        questionsSteps.chooseRadio(variables.questionTitleRadio, variables.questionCategoryRadio);
        questionsSteps.chooseCheckbox(variables.questionTitleCheckbox, variables.questionCategoryCheckbox);
        questionsSteps.chooseParagraph(variables.questionTitleParagraph, variables.questionCategoryParagraph);
        questionsSteps.chooseScaled(variables.questionTitleScaled, variables.questionCategoryScaled);
        questionsSteps.chooseDate(variables.questionTitleDate, variables.questionCategoryDate);
        questionsSteps.chooseFileUpload(variables.questionTitleFileUpload, variables.questionCategoryFileUpload);
    });
});

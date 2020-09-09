const assert = require('assert');
const variables = require('./testData.json');

const AuthActions = require('./Login/Login_pa');
const QuestActions = require('./Questionnaire/Questionnaire_pa');
const MenuActions = require('./Menu/Menu_pa');



const authSteps = new AuthActions();
const questSteps = new QuestActions();
const menuSteps = new MenuActions();

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

    beforeEach(() =>{
        browser.maximizeWindow();
        browser.url(variables.appUrl);
    });

    afterEach(() => {
        browser.reloadSession();
    });
    
    
    it('Questionnaire CRUD Workflow', () =>{
        userLogin(variables.emailCO, variables.passwordCO);
        menuSteps.goToQuestPage();
        questSteps.openAddQuestForm();
        questSteps.enterQuestTitle(variables.questionnaireTitle);
        questSteps.saveQuest();
        assert(questSteps.getQuestName(), variables.questionnaireTitle);
        // 
        questSteps.openEditQuestForm();
        questSteps.enterQuestTitle(variables.questionnaireTitleEdited);
        assert(questSteps.getQuestName(), variables.questionnaireTitleEdited);


    });
});


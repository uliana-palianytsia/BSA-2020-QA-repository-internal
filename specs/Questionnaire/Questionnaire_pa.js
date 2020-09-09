const QuestionnairesPage = require('./Questionnaire_po');
const questionnaire = new QuestionnairesPage();

class QuestActions {
    
    openQuestPage() {
        questionnaire.questionnaireMenu.waitForDisplayed(2000);
        questionnaire.questionnaireMenu.click();
    }


    openAddQuestForm() {
        questionnaire.addQuestionnaireButton.waitForDisplayed(2000);
        questionnaire.addQuestionnaireButton.click();

    }

    enterQuestTitle(value) {
        login.addQuestionnaireTitleInput.waitForDisplayed(2000);
        login.addQuestionnaireTitleInput.clearValue();
        login.addQuestionnaireTitleInput.setValue(value);

    }

    saveQuest() {
        questionnaire.saveQuestionnaireButton.waitForDisplayed(2000);
        questionnaire.saveQuestionnaireButton.click();

    }



  
}
module.exports = QuestActions;

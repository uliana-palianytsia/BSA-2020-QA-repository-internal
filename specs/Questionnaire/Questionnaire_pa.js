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

    getQuestName() {
        questionnaire.createdQuestionnaire.waitForDisplayed(2000);
        return questionnaire.createdQuestionnaire.getText();
    }

    openEditQuestForm() {
        questionnaire.editQuestTitleButton.waitForDisplayed(2000);
        return questionnaire.editQuestTitleButton.getText();
    }


  
}
module.exports = QuestActions;

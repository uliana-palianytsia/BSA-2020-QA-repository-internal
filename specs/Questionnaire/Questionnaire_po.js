class QuestionnairesPage {
    get questionnaireMenu () {return $('a[href="/questionnaires"]')};
    get addQuestionnaireButton () {return $('//*[@id="app-content"]/div[2]/div/div/button')};
    get addQuestionnaireTitleInput () {return $('[name="loginForm"] [name="title"]')};
    get saveQuestionnaireButton () {return $('[name="loginForm"] [type="submit"]')};
    get createdQuestionnaire () {return $('[class*="styles_uiCar"] h3')};
};

module.exports = QuestionnairesPage;
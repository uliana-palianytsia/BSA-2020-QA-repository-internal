class QuestionnairesPage {
    get addQuestionnaireButton () {return $('//*[@id="app-content"]/div[2]/div/div/button')};
    get addQuestionnaireTitleInput () {return $('[name="loginForm"] [name="title"]')};
    get saveQuestionnaireButton () {return $('[name="loginForm"] [type="submit"]')};
    get createdQuestionnaire () {return $('[class*="styles_uiCar"] h3')};
    get editQuestTitleButton () {return $('//*[@id="app-content"]/div[2]/div/div/div[2]/div/div[1]/div/div/i[4]')};
};

module.exports = QuestionnairesPage;
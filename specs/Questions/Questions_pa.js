const QuestionsPage = require('./Questions_po');
const questions = new QuestionsPage();

class QuestionsActions {
    openQuestionsPage() {
        questions.QuestionsPage.waitForDisplayed(2000);
        questions.QuestionsPage.click();
    }
    addNewQuestions() {
        questions.AddNewButton.waitForDisplayed(2000);
        questions.AddNewButton.click();
    }
    enterTitle(value) {
        questions.QuestionName.waitForDisplayed(2000);
        questions.QuestionName.click();
        questions.QuestionName.clearValue();
        questions.QuestionName.setValue(value);
    }
    enterCategory(value) {
        questions.CategoryName.click();
        questions.CategoryName.clearValue();
        questions.CategoryName.setValue(value);
    }
    chooseType() {
        questions.Type.click();
    }
    chooseRadio(title, category) {
        this.enterTitle(title);
        this.enterCategory(category);
        this.chooseType();
        questions.Radio.click();
    }
    chooseCheckbox(title, category) {
        this.enterTitle(title);
        this.enterCategory(category);
        this.chooseType();
        questions.Checkbox.click();
    }
    chooseParagraph(title, category) {
        this.enterTitle(title);
        this.enterCategory(category);
        this.chooseType();
        questions.Paragraph.click();
    }
    chooseScaled(title, category) {
        this.enterTitle(title);
        this.enterCategory(category);
        this.chooseType();
        questions.Scaled.click();
    }
    chooseDate(title, category) {
        this.enterTitle(title);
        this.enterCategory(category);
        this.chooseType();
        questions.Date.click();
    }
    chooseFileUpload(title, category) {
        this.enterTitle(title);
        this.enterCategory(category);
        this.chooseType();
        questions.FileUpload.click();
    }
    selectItems() {
        questions.SelectItemPerPage.click();
    }
}
module.exports = QuestionsActions;

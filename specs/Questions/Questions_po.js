class Questions {
    get QuestionsPage() {
        return $("[href='/questions']");
    }
    get AddNewButton() {
        return $('button');
    }
    get QuestionName() {
        return $('[name="name"]');
    }
    get CategoryName() {
        return $('input[aria-autocomplete="list"]');
    }
    get Type() {
        return $('[class="ui dropdown sc-bbmXgH lhglrD"]');
    }
    get Radio() {
        return $('[class="dot circle outline icon"]');
    }
    get Checkbox() {
        return $('[class="check square icon"]');
    }
    get Paragraph() {
        return $('[class="align left icon"]');
    }
    get Scaled() {
        return $('[class="ellipsis horizontal icon"]');
    }
    get Date() {
        return $('[class="calendar alternate outline icon"]');
    }
    get FileUpload() {
        return $('[class="grey cloud upload icon"]');
    }
    get SelectItemPerPage() {
        return $('select');
    }
}

module.exports = Questions;

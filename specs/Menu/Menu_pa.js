const MenuPage = require('./Menu_po');
const menu = new MenuPage();

class MenuActions {
    goToQuestPage() {
        menu.questMenu.waitForDisplayed(2000);
        menu.questMenu.click();
    }
}




module.exports = MenuActions;
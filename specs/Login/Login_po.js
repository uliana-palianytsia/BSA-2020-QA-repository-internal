class AuthPage {
    get authPageButton () {return $('.face a[href="/auth"]')};
    get signInBoxButton () {return $('//*[@id="root"]/div/div[1]/div[3]/div/div[3]/div/div[2]/button')};
    get signInButton () {return $('//*[@id="root"]/div/div[1]/div[3]/div/div[2]/form/button')};
    get emailInput () {return $('[placeholder="Email"]:nth-of-type(1)')};
    get loginButton () {return $('//*[@id="root"]/div/div[1]/div[3]/div/div[2]/form/button')};
    get selectCompanyButton () {return $('.segment .small')};
    get passwordInput () {return $('[name="password"]:nth-of-type(2)')};
};

module.exports = AuthPage;

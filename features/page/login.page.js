const timeout = 5000


class LoginPage {
    get url (){
        return ("https://www.google.com/")
    }

    get btnLogin() {return $('//*[@id="gb"]/div/div[2]/a')}
    get msgTeste() {return $('//*[@id="headingText"]/span')}

    async clickBtn (){
        await (await this.btnLogin).waitForClickable({timeout})
        await (await this.btnLogin).click();
    }

    async msgSucess(){
        await (await this.msgTeste).waitForExist({timeout})
      //  await (await this.msgTeste).getText();
      return this.msgTeste
    }

    async open(){
        await browser.url(this.url)
    }
}


module.exports = new LoginPage();
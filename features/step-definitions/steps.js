const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../page/login.page')


Given("dado que estou na página do Google", async()=>{
    loginPage.open();
})

When("for fazer login", async()=>{
    await loginPage.clickBtn();
    
})

Then("vejo que estou na página de login", async()=>{
    await expect(loginPage.msgSucess()).toBeExisting()
})
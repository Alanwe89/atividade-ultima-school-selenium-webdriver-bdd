const { Given, Then, When, Before, After } = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const { By } = require('selenium-webdriver');
var options = new chrome.Options().headless();

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

// SETUP FIREFOX DRIVER 
// const firefox = require('geckodriver');
// const {By, Builder} = require('selenium-webdriver');
// let driver = new Builder()
//          .forBrowser('firefox')
//          .build();


Given('usuario deseja se cadastrar', {timeout: 15 * 1000},async () => {
    await driver.get("http://publicazo.insprak.com/")
    await driver.manage().window().setRect({ width: 1382, height: 744 })


});

When('coloca seus dados e senha', async () => {
    await driver.findElement(By.linkText("Cadastre-se")).click()
    await driver.findElement(By.id("user_fullname")).click()
    await driver.findElement(By.id("user_fullname")).sendKeys("alan vieira")
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("8888@hotmail.com")
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys("260387")
    await driver.findElement(By.id("user_password_confirmation")).click()
    await driver.findElement(By.id("user_password_confirmation")).sendKeys("260387")
    

});

Then('cadastro realizado com sucesso', async () => {
    await driver.findElement(By.name("commit")).click()
    
    //===============

    await driver.quit();

});

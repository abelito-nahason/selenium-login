import { Builder, WebElementCondition, By, until } from "selenium-webdriver";
import assert from 'assert'


const mainTest = () => {
    let driver;
    
    describe('Login', ()=> {
        it('should be successful', async ()=> {
            try {   
                driver = await new Builder().forBrowser('chrome').build();
                await driver.get('https://practice.expandtesting.com/login')
        
                await driver.manage().setTimeouts({implicit: 5000})
                await driver.manage().window().maximize()
        
                const emailField = await driver.findElement(By.id('username'))
                await emailField.sendKeys('practice1')
        
                // await sleep(2000)
                
                const passField = await driver.findElement(By.id('password'))
                await passField.sendKeys('SuperSecretPassword!')    
                
                // await sleep(2000)
                await passField.sendKeys('\n')

                await driver.manage().setTimeouts({implicit: 3000})
                const successMessage = await driver.findElement(By.className('alert alert-success alert-dismissible fade show')).isDisplayed()
                assert.equal(successMessage, true)

            } catch (error) {
                assert.fail(error)
            } finally {
                await driver.quit()
            }
        })
    })

}

mainTest()

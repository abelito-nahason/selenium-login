import { Builder, WebElementCondition, By, until } from "selenium-webdriver";


const sleep = (duration) => {
    return new Promise((r)=>setTimeout(r,duration))
}

const mainTest = async () => {
    let driver;
    
    try {   
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.seagm.com/')

        await driver.manage().setTimeouts({implicit: 5000})
        await driver.manage().addCookie({name: 'CookieConsent', value: '{stamp:%27yb6bNb8cDCcBaukn+KwbFY3AQcxaZjHnP2MUVDzKlpuHSMuWMBZI4Q==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1714656657073%2Cregion:%27id%27}'})
        await driver.manage().window().maximize()

        const signButton = await driver.findElement(By.id('login-btn'))
        await signButton.click()

        const signInButton = await driver.findElement(By.xpath(`//a[@ga-data-playload='LogIn']`))
        await signInButton.click()

        await driver.manage().setTimeouts({implicit: 3000})
        await driver.manage().addCookie({name: 'CookieConsent', value: '{stamp:%27yb6bNb8cDCcBaukn+KwbFY3AQcxaZjHnP2MUVDzKlpuHSMuWMBZI4Q==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1714656657073%2Cregion:%27id%27}'})

        const emailField = await driver.findElement(By.id('login_email'))
        await emailField.sendKeys('abelito.nahason@binus.ac.id')

        await sleep(2000)
        
        const passField = await driver.findElement(By.id('login_pass'))
        await passField.sendKeys('AbelTesting123')    
        
        await sleep(2000)
        await passField.sendKeys('\n')
        

    } catch (error) {
        console.log(error)
    } finally {
        // await driver.quit()
    }

}

mainTest()


import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Draw button displays the div with id ="choices"', async () => {
    const draw_btn = await driver.findElement(By.id('draw'))
    await driver.sleep(4000)
    await draw_btn.click()

})

test('Check that clicking an “Add to Duo” button displays the div with id = “player-duo”', async ()=> {
    const draw_btn = await driver.findElement(By.id('draw'))
    await driver.sleep(4000)
    await draw_btn.click()

    await driver.sleep(4000)
    let title1 = await driver.findElement(By.id('player-duo'))
    let displayed = await title1.isDisplayed()
    expect(displayed).toBe(true)
})
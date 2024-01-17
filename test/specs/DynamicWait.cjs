const assert=require("assert")
describe("Dynamic Wait Example",async ()=>{

it("Waiting for the Text",async ()=>{

    browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")
    browser.maximizeWindow()
    //browser.pause(5000)
    const startButton=  await $("//button[text()='Start']")
    await startButton.click()
    const text=  await $("//h4[text()='Hello World!']")
    //console.log(await text.isDisplay())
    await text.waitForDisplayed({timeout:15000})
    assert.equal(await text.isDisplayed(),true)

})



})
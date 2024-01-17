const assert=require("assert")
describe("Field enable Wait Example",async ()=>{

it("Waiting for the field",async ()=>{

    browser.url("https://the-internet.herokuapp.com/dynamic_controls")
    browser.maximizeWindow()
    const enableBtn=  await $("(//button[@type='button'])[2]")
    await enableBtn.click()
    const field=await $("//input[@type='text']")
    await field.waitForEnabled()
    await field.setValue("Ram")
    await browser.pause(3000)

})



})
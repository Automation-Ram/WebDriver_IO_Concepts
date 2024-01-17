const assert=require("assert")
describe("Handle Dropdown",async () =>{


    it('Select DOB Fields',async ()=>{
    
    await browser.url("https://www.facebook.com/")
    const createNewAcc= await $("//a[@class='_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy']")
    await createNewAcc.click()

    const monthDD= await $("#month")
    await monthDD.selectByAttribute("value","11")
    await browser.pause(5000)
    const selectedValue= await monthDD.getValue()
    console.log(selectedValue)
    assert.equal(selectedValue,11)
    
    })
    
    
    })
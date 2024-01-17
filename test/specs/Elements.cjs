describe ("Elements Commands",function(){

    it('Register filling form', async function(){
        await browser.url("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        await browser.maximizeWindow()
        await browser.pause(3000)
        const firstName= await $("#input-firstname")
        await firstName.setValue("Ram")
        const lastName= await $("#input-lastname")
        await lastName.setValue("Ramadoss")
        const email= await $("#input-email")
        await email.setValue("mailme.rramm@gmail.com")
        const tele= await $("#input-telephone")
        await tele.setValue("7904986337")
        const value=await firstName.getValue()
        console.log("Value added to username IS",value)
        const agreebtn=await $("//input[@name='agree']")
        const clickStatus=await agreebtn.isClickable();
        console.log(clickStatus)
    
    })
    
    
    })
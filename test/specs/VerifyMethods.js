describe ("Intraction with WebElements", async function()
{
    it("Verify URL", async function()
    {
        await browser.url('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
       // console.log("session ID is:", browser.sessionId);
       await expect(browser).toHaveUrlContaining('naveenautomationlabs')
    })
    it("verify title", async function(){
        await browser.url('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        await expect(browser).toHaveTitle('Account Login')
    })
    it("verify login", async function(){
        await browser.url('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        const userName=await $("#input-email")
        await userName.setValue("mailme.rram@gmail.com")
        const password=await $("#input-password")
        await password.setValue("Admin1992@$")
        await $("//input[@value='Login']").click()
        await expect(browser).toHaveTitle('My Account')      
    })
        
})


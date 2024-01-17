describe("Find Multiple Elements", async function(){



    it("Count the number of icon",async function()
    {
        browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const allLinks=await $$("//div[@class='orangehrm-login-footer-sm']//a")
        console.log(allLinks.length)
        assert.strictEquals(allLinks.length,4,"count Mismatch")
    })
})

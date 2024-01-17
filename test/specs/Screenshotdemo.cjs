describe("Screenshot in DWIO",  ()=>{
    it("screenshot for chrome ",async ()=>{
        await browser.url("https://www.google.com/")
        await browser.saveScreenshot("./Screenshots/wdio.png")
    })
})
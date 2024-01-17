describe('Auto Suggestion',  ()=>{
it('Click on google Autosuggestion', async () =>{


    await browser.url("https://www.google.com/")
    const search=await $("#APjFqb")
    await search.setValue("Mukesh Otwani")
    await browser.pause(5000)

    const allValues=await $$("//ul[@role='listbox']//li//div[@role='option']")
    for(let i=0;i<allValues.length;i++)
    {
        console.log("Value from google is ",await allValues[i].getText())
        const value=await allValues[i].getText()
        if(value.includes("mukesh otwani blog"))
        {
            await allValues[i].click()
            await browser.pause(9000)
            break
        }
    }

})

})
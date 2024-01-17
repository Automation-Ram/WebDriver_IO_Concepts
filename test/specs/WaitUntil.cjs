describe("Dynamic Wait Example",async ()=>{

    it.only('Wait For Custom Condition', async() => {

        await browser.url("http://seleniumpractise.blogspot.com/2016/08/how-to-use-explicit-wait-in-selenium.html")

        await (await $("//button[normalize-space()='Click me to start timer']")).click()

        const element= await $("#demo")

        await element.waitUntil(async function (){

               return (await this.getText())==="WebDriver"

        }
        ,
        {
            timeout:18000,
            timeoutMsg:"Sorry could not find element within time"
        })




    })
    
    
    
    })
/**
 describe("iframe test", function() {
    it("", async function() {
        await browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
        
        await browser.execute(function() {
            let element = (<HTMLInputElement>document.getElementById('textareaCode'));
            let code = element.value;
            code = code.replace('https://www.w3schools.com','https://www.bing.com')
            element.value = code;
        }) 

        await browser.execute(function() {
                let sourse = document.querySelector('.cm-m-xml.cm-string');
                sourse.textContent = "https://www.bing.com"
        }) 
        
        let element = await(await $('#textareaCode'));
        let code = await element.getValue();
        code = code.replace('https://www.w3schools.com','https://www.bing.com')
        await element.setValue(code);
            sourse.textContent = "https://www.bing.com";
        
    }) 
}) I think regular webdriver flow did not work because Selenium webdriver doesn't work well with CodeMirror which are used as Text editor on w3school.com

**/

describe("iframe test", function() {
    it("bing site reserche", async function() {
        await browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
        let element = await(await $('#iframeResult'));
        await browser.switchToFrame(element);
        
        await browser.execute(function() {
            let iframe = document.querySelector('h1 + iframe');
            iframe.setAttribute('src', 'https://www.bing.com');
            iframe.setAttribute('width', '400px');
            iframe.setAttribute('height', '800px');
        })
        await browser.switchToFrame(await(await $('h1 + iframe')));

        let input = await(await $('input#sb_form_q'));
        await browser.pause(1000)
        await input.setValue('Redmond');

        let list = await(await $('#sw_as'));
        await list.waitForDisplayed();

        let washington = await(await $('strong=washington'));
        await washington.click();

        let search = await(await $('div.np_hdr_ttl + cite'));
        await search.waitForDisplayed();
        await expect(search).toHaveText("bing.com/travelguide?q=Redmond");
    })
})
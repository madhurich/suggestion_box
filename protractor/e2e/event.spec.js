describe('testing event', function(){
    it('should navigate to right page', function(){
        browser.get('http://localhost:3000/#/suggestion/0');
        element(by.linkText('Back')).click();//gets the elemnt that has the link text as 'Back'
        //browser.waitForAngular();
        expect(browser.getCurrentUrl()).toMatch('http://localhost:3000');
    });

    describe('when the form is empty', function(){
        it('should have disabled button', function(){
            browser.get('http://localhost:3000');
            expect(element(by.tagName('button')).getAttribute('class')).toBe('btn btn-primary disabled');
        }); 
    });
    describe('when the input i enetered', function(){
        browser.get('http://localhost:3000');
        it('should not have disabled button', function(){
            element(by.tagName('input')).sendKeys('Hello Hi');//filling in the input with text 'hello hi'
            expect(element(by.tagName('button')).getAttribute('class')).toBe('btn btn-primary');
        }); 
        it('should have the entered input after click', function(){
            var found;
            // var titleCount;
            // titles = element.all(by.tagName('h3')).count() + 1;
            element(by.model('title')).sendKeys('Welcome to suggestions');
            element(by.tagName('button')).click();
            expect(element.all(by.tagName('h3')).count()).toBe(5);
            expect(element.all(by.repeater('x in posts')).count()).toBe(5);
            // element.all(by.tagName('h3')).then(function(elems){
            //     found = elems.filter(function(elem, index){
            //         return elem.getText() === 'Welcome to suggestions';
            //     });
            // });
            // expect(found.length).toBe(1);
        });
    });
});
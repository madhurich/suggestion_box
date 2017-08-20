describe('testing index page', function(){
    describe('all about index page', function(){
        var firstTitle;
        var comment;
        beforeEach(function(){
            browser.get('http://localhost:3000');
            comment = element.all(by.css('.glyphicon-comment')).first();
            firstTitle = element.all(by.binding('title')).first();
            // firstTitle.getText().then(function(title){
            //     titleInFirstPage = title;
            // }); //if you check with titleInFirstPage its not working
            //if you check with firstTitle then it worked.
            comment.click();
            browser.waitForAngular();
        });
        it('should have title', function(){
            expect(browser.getTitle()).toBe('Suggestion Box');    
        });
        it('should navigate to comments page', function(){
            var titleInPage = element(by.binding('title'));
            expect(titleInPage.getText()).toBe(firstTitle.getText());
        });  
        it('should update the url', function(){
            expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/suggestion/0');
        });  
    });   
});

app.factory('suggestions', [function(){
    var demoSuggestions = {
    posts: [
    {
    id: 1,    
    title: 'Free pizza at club meetings',
    upvotes: 15,
    comments: [{
        body: 'I would like to have a pesto pizza',
        upvotes: 1,
        downvotes: 1,
    },{ body: 'Maple house is yum! for pizzas',  
        upvotes: 5,
        downvotes: 0,
    }],
    downvotes: 1,
    },
    {
    id: 2,    
    title: 'End all club emails with Laffy Taffy jokes',
    upvotes: 9,
    comments: [{
        body: 'who else want to add a joke here??',
        upvotes: 1,
        downvotes: 0,
    },{ body: 'Why to add a joke, I did\'nt get you',  
        upvotes: 5,
        downvotes: 1,
    }],
    downvotes: 0,
    },
    {
    id: 3,
    title: 'Retrofit water fountain with Gatorade',
    upvotes: 7,
    comments: [{
        body: 'Many outdoor water fountains are available at E Wichita',
        upvotes: 1,
        downvotes: 0,
    },{ body: 'Yea check out the \"Bluworld of Water 6 ft. Garden-Fall Floor Fountain in Stainless Steel and Silver Mirror\"',  
        upvotes: 5,
        downvotes: 0,
    }],
    downvotes: 2,
    },
    {
    id: 4,
    title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
    upvotes: 3,
    comments: [{
        body: 'Ahh when I get to listen the word sing, the one person comes into my mind is Justin Beiber',
        upvotes: 1,
        downvotes: 0,
    },{ body: 'But for me it\'s Akon',  
        upvotes: 5,
        downvotes: 0,
    }],
    downvotes: 0,
    }
    ]
    };
 return demoSuggestions;
    }]);


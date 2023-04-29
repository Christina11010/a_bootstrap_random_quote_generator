window.onload = init;
        function init() {
            generateQuote();
        }

        function generateQuote() {
            console.log("Quote generated")
            let quoteSize = QUOTEBANK.length;
            let randomIndex = Math.floor(Math.random() * quoteSize);
            // Math.random() will randomly generate a number between 0 and 1 (not including 0 and 1), 
            // so when multiply by quoteSize, it will randomly generate a number between 0 and the number of quotes in the quoteBank
            // math.floor() round down the decimals, so now will get a random integer between 0 and (quoteSize - 1), which would be the largest
            // index for the quoteBank
            let randomQuoteData = QUOTEBANK[randomIndex];

            // breaking down the twitter link got from the example to 3 parts 
            let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
            
            // replace the space with %20 (because of weird format reason in the original link)
            let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
            let authorInApiFOrmat = randomQuoteData.author.replace(/ /g, "%20");
            // add the quote
            twitterLink += quoteInApiFormat;
            
            // add the author 
            twitterLink += " - " + authorInApiFOrmat; 
        
            // let quoteInApiFormat = encodeURIComponent(randomQuoteData.quote);
            // let authorInApiFOrmat = encodeURIComponent(randomQuoteData.author);
            // twitterLink += quoteInApiFormat + " - " + authorInApiFOrmat;

            // document is all the things in the <body>
            // the getElementByID method is a built-in function in JS that searches the HTML document for an element with a specific ID and returns the element
            document.getElementById("text").innerText = randomQuoteData.quote; 
            document.getElementById("author").innerText = randomQuoteData.author;
            document.getElementById("tweet-quote").href = twitterLink; 
            
       }
    
    //  set quoteBank to an array with [], inside it are objects with key-value in quote-author 
       const QUOTEBANK = [
        {
            quote: "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.",
            author: "Taylor Swift"
        }, {
            quote: "Be the change that you wish to see in the world.",
            author: "Mahatma Gandhi"
        }, {
            quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            author: "Ralph Waldo Emerson"
        }, {
            quote: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius"
        }, {
            quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
            author: "James Baldwin"
        }, {
            quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill"
        }, {
            quote: "The only thing we have to fear is fear itself.",
            author: "Franklin D. Roosevelt"
        }, {
            quote: "It is not the mountain we conquer but ourselves.",
            author: "Sir Edmund Hillary"
        }, {
            quote: "A ship is always safe at shore but that is not what it's built for.",
            author: "Albert Einstein"
        }, {
            quote: "I am not a product of my circumstances. I am a product of my decisions.",
            author: "Stephen Covey"
        }, {
            quote: "Happiness is not something ready made. It comes from your own actions.",
            author: "Dalai Lama"
        }
       ]
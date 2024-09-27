var quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't wait for opportunity. Create it.",
    "You are capable of amazing things.",
    "Don't watch the clock; do what it does. Keep going.",
    "Difficult roads often lead to beautiful destinations.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Believe in yourself and all that you are.",
    "We cannot solve problems with the kind of thinking we employed when we came up with them",
    "Learn as if you will live forever, live like you will die tomorrow",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
    "When you change your thoughts, remember to also change your world.",
    "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
    "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
    "Success is getting what you want; happiness is wanting what you get.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty."
]
function quoteDisplay(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('generateQuote').innerHTML = quotes[randomIndex]; 
}
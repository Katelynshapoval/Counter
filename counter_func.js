function Count(){
    input = document.getElementById("text-area").value;
    console.log(input)
    symbols = document.getElementById("symbols_num");
    words = document.getElementById("words_num");
    sentences = document.getElementById("sentences_num");
    symbols.innerHTML = input.length;
    matches = input.match(/[\w\d\’\'-]+/gi);
    words.innerHTML = matches ? matches.length : 0;
    sentences.innerHTML = input.split(/[\.!\?]+\s/g).filter(Boolean).length;
}
setInterval(Count, 100);
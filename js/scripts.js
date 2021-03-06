var wordOrder = function(phrase) {
  var words = phrase.split(" ");
  var sortedWords = phrase.split(" ").sort();
  var wordCounter = {};
  var output = [];
  words.forEach(function(word){
    wordCounter[word] = 1;
  });

  for(var i=0; sortedWords.length > i; i++){
    if (sortedWords[i] === sortedWords[i+1]){
      wordCounter[sortedWords[i]] += 1;
      delete sortedWords[i];
    }
  }

  for(var i = sortedWords.length; i > 0; i--){
    for(var key in wordCounter){
      if (wordCounter[key] === i) {
        if( isATie(wordCounter[key], wordCounter[output[output.length - 1 ]])
            && words.indexOf(key)<words.indexOf(lastElement(wordCounter, output)) && sortedWords.indexOf(key)>words.indexOf(lastElement(wordCounter, output))){
          var shifted = output.pop();
          output.push(key.toString());
          output.push(shifted);
        } else {
          output.push(key.toString());
        }
      }
    }
  }

// debugger;
  return output.join(", ");
};

var isATie = function(freq1, freq2){
  return freq1===freq2;
};

var lastElement = function(dictionary, array){
  return dictionary[array[array.length - 1 ]];

};


$(document).ready(function() {
    $("form#words").submit(function(event) {
    var userInput = wordOrder($("input#input-words").val());
    $(".results").toggle(function(){
      $(this).fadeOut("fast");
    })

    $("span.words").text(userInput);
    $(".results").toggle(function(){
      $(this).fadeIn("fast");
    });

    event.preventDefault();
  });
});

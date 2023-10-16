const inputSentence = "Have A nice Day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);

function reverseWordsInSentence(sentence)
 {
  
  const words = sentence.split(' ');
  const reversedWords = words.map(word => 
    {
    return word.split('').reverse().join('');
    });
    
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}


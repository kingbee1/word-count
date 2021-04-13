
function countWords()
{
    var str = document.getElementById("inputTextField").value;

    document.getElementById("word").innerHTML="The total number of words is " + countWord(str);
    document.getElementById("character").innerHTML="The total number of characters is " + str.length;
    console.log(character);
    document.getElementById("vowels").innerHTML="The total number of vowels is " + countVowels(str);
    document.getElementById("consonants").innerHTML="The total number of consonants is " + countConsonants(str);
}

function countWord(str) {
 
  return str.split(" ").length;
 
}



function countVowels(str){
    var vowel= "aeiouAEIOU"
    var vowelCount = 0;
    for(var x=0; x<vowel.length;x++){
        for(var y=0; y<vowel.length;y++){
            if(str[x]==vowel[y])
            {
                vowelCount++;
            }

        }
    }
    return vowelCount
}

function countConsonants(str){
    var consonant="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    var consonantCount=0;
    for (var x=0; x<consonant.length;x++){
        for (var z=0; z<consonant.length;z++){
            if(str[x]==consonant[z])
            {
                consonantCount++;
            }
        }
    }
    return consonantCount
}

































//     var numWords = 0;

//     for (var i = 0; i < text.length; i++) 
//     {
//         var currentCharacter = text[i];

//         if (currentCharacter !== " ")
//         {
//           numWords += 1;   
//         }
//     }

//     document.getElementById("numWordsOutput").innerHTML = numWords + " words";
// }
























// function countWords()
// {
//     var text = document.getElementById("word").value;

//     var numWords = 0;

//     for (var i = 0; i < text.length; i++) 
//     {
//         var currentCharacter = text[i];

//         if (currentCharacter !== " ")
//         {
//           numWords += 1;   
//         }
//     }

//     document.getElementById("numWordsOutput").innerHTML = numWords + " words";
// }



// function getVowels(str) {
//   var m = str.match(/[aeiou]/gi);
//   return m === null ? 0 : m.length;
// }

    
// a program that will find a letter is vowel or consonant
var letter = prompt("Enter a letter : ");

// convert any uppercase input into lower cause we set only lowercase letter in condition
letter = letter.toLowerCase();

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}
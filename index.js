alert('hello')

const array = [1,5,7,3]

const sum = array.reduce((a, b) => a + b)

console.log(`sum is ${sum}`)

const isPalindrome = (word) => {
    const wordLength = word.length - 1;
    var reverseWord = "";

    for (let i=wordLength; i>=0; i--)
    {
        reverseWord += word[i]

        console.log(reverseWord)
    }

    return word === reverseWord;

}

console.log(`isPalindrome ${isPalindrome('cat')}`)

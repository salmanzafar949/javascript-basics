alert('hello')

const array = [1,5,7,3,2,3,7]

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


/**
 * Remove Duplicates from array
 */

const arrayUpdated = a => [...new Set(a)]

console.log(`${arrayUpdated(array)}`)

const uniqueArray = a => a.filter((el,i) => a.indexOf(el) === i)

console.log(uniqueArray(array))
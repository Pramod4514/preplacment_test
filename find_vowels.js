function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    const lowerCaseStr = str.toLowerCase();
  
    for (let i = 0; i < lowerCaseStr.length; i++) {
      if (vowels.includes(lowerCaseStr[i])) {
        count++;
      }
    }
  
    return count;
  }
  const str = 'Hello, World!';
const result = findVowels(str);
console.log(result);
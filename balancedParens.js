// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

// let sample = word => {
//     let rs = 0
//     let ls = 0
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === "(") {
//             ls ++
//             console.log(ls, "<------- left side")
//         } else if (word[i] === ")") {
//             rs ++
//             console.log(rs, "<----- right side")
//         } 
//     }
//     return rs === ls
// }
const hasBalancedParens = string => {
    let counter = 0
    
    for(i = 0; i < string.length; i++){
      if (string[i] === '(') {
        counter += 1
      } else if (string[i] ===')'){
        counter += -1
      } if (counter < 0) {
        return false
      }
    }
    return !counter ? true : false
  }

console.log(hasBalancedParens("(This (is (a) balanced) string.)"))
function isPalindrome(x: number): boolean {
    console.log('x.toString(): ', x.toString());
    console.log('x.toString().split(""): ', x.toString().split(""));
    console.log('x.toString().split("").reverse(): ', x.toString().split("").reverse());
    console.log('x.toString().split("").reverse().join(""): ', x.toString().split("").reverse().join(""));
    console.log('+x.toString().split("").reverse().join(""): ', +x.toString().split("").reverse().join(""));
    return x === +x.toString().split("").reverse().join("");
}

// function isPalindrome(x: number): boolean {
//     return x<0 ? false : x === +x.toString().split("").reverse().join("");
// };

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // true
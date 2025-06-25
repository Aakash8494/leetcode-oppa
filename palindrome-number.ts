function isPalindrome(x: number): boolean {
    return x === +x.toString().split("").reverse().join("");
}

console.log(isPalindrome(121)); // true
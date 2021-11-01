function count_vowels(string) {
let regex = /[a, i, o, u, e]/gi;
return string.match(regex).length;

}

console.log(count_vowels('strong'))
function nearby_az(string) {

let ind = string.indexOf('a');

let newStr = string.slice(ind, ind+4);
let rejex = new RegExp("z");
let setSt = rejex.test(newStr)
return setSt;

}
console.log(nearby_az("abba"))

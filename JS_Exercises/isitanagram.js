function isAnagram(test, original) {
   test.toLowerCase();
   original.toLowerCase();

   let arrTest = test.split('');
   let arrOriginal = original.split('');

strTest = arrTest.sort().join('');
strOriginal = arrOriginal.sort().join('');
   
return strTest === strOriginal ? true : false;



};

console.log(isAnagram("fofet", "toffee")) 
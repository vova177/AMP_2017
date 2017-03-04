getWords = (str) => {
    if(typeof  str==='string' || str instanceof String) {
        str += " "
        let arr = [], word = "", count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] != " ") {
                word += str[i];
            } else {
                arr[count++] = word;
                word = "";
            }
        }
        return arr;
    }else{
        return "need string";
    }
}
let str="sad as sada asd czxv";
let arr = getWords(str);
let reverseStr="";
for(let i=arr.length-1; i>=0; i--)
    reverseStr+=arr[i]+" ";
console.log(reverseStr);
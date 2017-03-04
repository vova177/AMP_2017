calcSameLetterNumber = (number) => {
     if(typeof number==="number") {
         let str = number.toString(), count = 0;
         for (let i = 0; i < str.length; i++) {
             if (str[i] == 5)
                 count++;
         }
         return count;
     }
}
taskA = (number1, number2) => {
    if(typeof number1==="number" && typeof number2==="number") {
        if (calcSameLetterNumber(number1) > calcSameLetterNumber(number2)) {
            return number1;
        } else {
            return number2;
        }
    }
}
taskB = (number) => {
    if(typeof number==="number")
        return Number(number.toString()[0]) + Number(number.toString()[number.toString().length - 1]);
}
taskC =(number) => {
    if (typeof number === "number"){
        let str = number.toString(), tmp, arr = [];
    for (let i = 0; i < str.length; i++)
        arr[i] = str[i];
    tmp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = tmp;
    let result = "";
    for (let i = 0; i < arr.length; i++)
        result += arr[i];
    return Number(result);
}
}
let number1=5353, number2=4543, selectNumber=taskA(number1, number2);
console.log(selectNumber);
console.log(taskB(selectNumber));
console.log(taskC(number1));
console.log(taskC(number2));

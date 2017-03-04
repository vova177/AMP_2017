calcSameLetterNumber = (number) => {
        let str = number.toString(), count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == 5)
                count++;
        }
        return count;
}
taskA = (number1, number2) => {
    if(typeof number1==="number" && typeof number2==="number") {
        if (calcSameLetterNumber(number1) > calcSameLetterNumber(number2)) {
            return number1;
        } else {
            return number2;
        }
    }else {
        return "need number";
    }
}
taskB = (number) => {
    if(typeof number==="number") {
        return Number(number.toString()[0]) + Number(number.toString()[number.toString().length - 1]);
    }else{
        return "need number"
    }
}
taskC =(number) => {
    let str=number.toString(), tmp;
    tmp=str[0];
    str[0]=str[str.length-1];
    str[str.length-1]=tmp;
    return Number(str);
}
let number1=5353, number2=4544, selectNumber;
console.log(selectNumber=taskA(number1, number2));
console.log(taskB(selectNumber));
console.log(taskC(selectNumber))

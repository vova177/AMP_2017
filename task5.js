addTwoNumber=(number1, number2, res=1) => {
    if(typeof number1==="number" && typeof number2==="number") {
        if(res==number1+number2)
            return res;
       if(res<=number1+number2)
           return addTwoNumber(number1, number2, ++res);
    }
}
console.log(addTwoNumber(2,9));
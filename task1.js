NumbersIsQuoter=(number)=> {
    if(typeof number==="number" && number>=1000 && number<=9999) {
        return true;
    }else{
        return false;
    }
};
NumbersQuoterIsDif=(number) => {
    if(NumbersIsQuoter(number)) {
        let str = number.toString();
        for (let i = 0; i < str.length - 1; i++) {
            let j = 1;
            for (j += i; j < str.length; j++) {
                if (str[i] == str[j])
                    return false;
            }
        }
        return true;
    }
}
ReversLetter = (number) =>{
    if(NumbersQuoterIsDif(number)) {
        let str = number.toString();
        for (let i = str.length - 1; i >= 0; i--)
            console.log(str[i]);
    }
}
let number=3459;
ReversLetter(number);
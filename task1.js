NumbersIsQuoter=(number)=> {
    if(number>=1000 && number<=9999) {
        return true;
    }else{
        return false;
    }
};
NumbersQuoterIsDif=(number) => {
    let str=number.toString();
    for(let i=0; i<str.length-1; i++) {
        let j=1;
        for(j+=i; j<str.length; j++) {
            if(str[i]==str[j]) {
                return false;
            }
        }
    }
        return true;
}
ReversLetter = (number) =>{
    let str=number.toString();
    for(let i=str.length-1; i>=0; i--) {
        console.log(str[i]);
    }
}
let number=23456;
NumbersIsQuoter(number);
if(NumbersQuoterIsDif(number))
ReversLetter(number);
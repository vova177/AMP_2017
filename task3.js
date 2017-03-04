ChangeFirstElementArr=(arr) => {
    let min=arr[0], adress;
    for(let i=1; i<arr.length; i++) {
         if(min>arr[i]) {
             min = arr[i];
             adress=i;
         }
    }
    arr[adress] = arr[0];
    arr[0] = min;
    return arr;
}
let arr = [2,4,-3,1,12,1,8,5,9,4,12,-45,13,15,14,-33];
console.log(ChangeFirstElementArr(arr));

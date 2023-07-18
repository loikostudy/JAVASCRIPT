let index = [];

function range (start,end,step){
for (let i = start ;i<=end ;i =i+ step){

    index[i] = i ;

}
console.log(index);

}

range(0,10);
let sum = 0 
function sumOf (arr) {
    for (let i = 0 ; i < arr.length;i++){
            sum = sum +i;
    }
console.log(sum);
}
sumOf(index);
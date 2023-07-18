

let index = [1,2,3,4,5,6,9,0,10];
function reverseArray(arr){
j = arr.length-1
for (let i = 0; i<arr.length;i++){

arr[i] =arr[j]
j--


}
console.log(arr);
}


reverseArray(index);
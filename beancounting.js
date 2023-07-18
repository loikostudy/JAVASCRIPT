function countBs(str1){
let count =0;
for (let i =0;i<str1.length;i++){
    if (str1.charAt(i) ==="B"){
        count++;
    }
    
}
return count;
}

console.log(countBs("BeanBurritoBullyBakedBlonde"));
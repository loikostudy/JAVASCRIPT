function isEven (a) {

if ( a<0){
return false;
}
else if (a % 2 == 0 ){
    return true;
}
else {
    return isEven(a-2);
}
}

console.log(isEven(9));
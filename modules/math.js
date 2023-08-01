/*
1.
function add(a,b){
    return a+b;
}

//모듈 그 자체를 바로 add함수를 할당
module.exports = add;*/   

/*2. 모듈을 호출했을때 add의 키 값에는 (a,b) {return a+b;}의 익명함수가 할당
exports.add=function(a,b){
    return a+b;   //-> 이 경우 add를 하나의 객체로써 밖으로 내보내줌
}*/

/*3.
function add(a,b){
    return a+b;
}
//모듈을 호출헀을때, add의 키 값에는 add 함수가 들어가는 방법
module.exports = {add: add};*/

//4. 모듈을 호출했을때, add키 값에는 add변수 함수가 가지고 있는 값이 할당된다.
const add = (a,b)=>{
    return a+b;
}
exports.add=add;
20
const input = require('fs').readFileSync('1874/input.txt','utf8').trim().split('\n');

const testCase = +input[0];
let stack = [];
let arr = [];

let result = [];
let pos = 0;

let check = 0;

for(let i = 1 ;i<=testCase;i++){

    if(input[i] >= pos){
        for(let  j = pos; j <input[i] ;j++){
            stack.push(j+1);
            result.push('+');
        }
        arr = stack.pop();
        result.push('-');
        pos = input[i];
    }else if(input[i]< pos){
        arr = stack.pop();
        result.push('-');
    }
    if(testCase === pos){
        pos = 0;
        check = 1
    }
    
}

function solution(){
    // 활용해서 예외처리도 시도해볼 예정
}
console.log(result.join('\n'));
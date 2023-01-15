20
const input = require('fs').readFileSync('1874/input.txt','utf8').trim().split('\n');
//console.log(input);

const testCase = +input[0];
let stack = [];
let arr = [];

let result = [];
let pos = 1;

let check = 0;

for(let i = 1 ;i<=testCase;i++){
    input[i] = +input[i]
    if(input[i] >= pos){
        for(let  j = pos; j <=input[i] ;j++){
            stack.push(j);
            result.push('+');     
        }
        pos = input[i] + 1;
      
    }

    if(input[i] === stack.pop()){
        result.push('-');
    }else{
        check =1;
        break;
    }

    // pos === 5
    
}

if(check !==1 ){
console.log(result.join('\n'));
}else{
    console.log('NO');
}
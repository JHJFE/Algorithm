//18시작 35끝
const input = require('fs').readFileSync('10845/input.txt','utf8').trim().split('\n');
const testCase = +input[0];
let Queue = [];
let result = [];
for(let i = 1 ;i <= testCase;i++){
    
    let arr = input[i];
    let misson = arr.split(' ');
    

    solution(misson[0], +misson[1]);
}

function solution(Do, value){
    if (Do === 'push'){
        Queue.push(value);
    }else if(Do === 'pop'){
        if( Queue.length !== 0){
            result.push(Queue.shift());
        }else{
            result.push(-1)
        }
    }else if(Do === 'front'){
        if(Queue.length !== 0){
            result.push(Queue[0]);
        }else{
            result.push(-1);
        }
    }else if(Do === 'back'){
        if(Queue.length !== 0){
            result.push(Queue[Queue.length-1]);
        }else{
            result.push(-1);
        }
    }else if(Do === 'empty'){
        if(Queue.length === 0){
            result.push(1);
        }else{
            result.push(0);
        }
    }else if(Do === 'size'){
        result.push(Queue.length)
    }
}

console.log(result.join('\n'));
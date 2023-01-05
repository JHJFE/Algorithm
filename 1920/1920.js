
const line = require('fs').readFileSync('1920/input.txt','utf8')
const input = line.trim().split('\n');

const Mnum = +input[2]; // M 정수 개수

let nArray ;
let mArray ;
let result = []; // 존재 값 담는 곳


for(let i = 1;i <=3;i+=2){
    
    const arr = input[i].split(' ');
   
  
    if(i === 1){
        nArray = arr;
    }else{
        mArray = arr;
        for(let i = 0 ;i<Mnum;i++)
        {
           let m =  mArray[i] ;
           
           solution(m,nArray)
        }
    }
    
}
function solution(m,arr){ // 퀵소팅으로 나중에 구현
    for (let i  = 0 ;i< arr.length; i++){ 
        if(arr[i] === m){
            result.push(1);
            break;
        }else if(i === arr.length-1){
            result.push(0);
        }
    }
    
}
console.log(result.join('\n'));
//00:06:00
const line  = require('fs').readFileSync('/Users/junghojae/Documents/GitHub/Algorithm/9012/input.txt','utf8');
const input = line.trim().split('\n');
const testCaseNum = +input[0];

let result = []


for(let i =1;i<=testCaseNum;i++){

    let arr = input[i].split('');
   //console.log(arr);
    result[i-1] = solution(arr) ? 'YES' : 'NO'
}

function solution(arr){
let open = 0;
let close = 0;

let number = arr.length;
 
    for(let i =0;i<number;i++){

        if(arr.shift() === '('){
            
            open++;
        }else{
            close++;
        }
        if(close>open){
            console.log(open,close);
            return false;
        }
    }
   // console.log(open,close);
    return open === close;
    
}
console.log(result.join('\n'));
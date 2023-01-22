const inputF = require('fs').readFileSync('/Users/junghojae/Documents/GitHub/Algorithm/DataStructure/1021/input.txt','utf8')
const input = inputF.trim().split('\n');
//919

const info = input[0].split(' ');
const find = input[1].split(' ');

let N = +info[0];
const M = +info[1];

let deque = [];
let count = 0;

for(let i =1;i<=N;i++){
    deque.push(i)
}
for(let i = 0;i<M;i++){
    let num = +find[i]
    solution(num);
}

function solution(target){
   
    while(target !== deque[0]){
        
        if((N-1)-deque.indexOf(target) >= deque.indexOf(target) ){
            deque.push(deque.shift())
           
            count++
        }else{
            deque.unshift(deque.pop())
            count++
        }
        
    }
    deque.shift();
    N--;
}
console.log(count);
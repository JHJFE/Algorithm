const input = require('fs').readFileSync('DataStructure/10816/input.txt','utf8').trim().split('\n');
// 입력
// 검사해야할 숫자 개수
// 검사해야할 숫자들
// 검사해야할 숫자안에 몇개있는지 확인해야할 숫자 개수
// 확인해야할 숫자들
const N = input[0];//10
const M = input[2];//8

const nArray = input[1].split(' ');
const mArray = input[3].split(' ');

const result = [];

for(let i = 0 ; i <M ; i++ ){
    let count =0;
  
    for(let j = 0;j<N;j++){
        if(+nArray[j]=== +mArray[i]){
            count++
        }
    }
    result.push(count);
}
console.log(result.join(' '))

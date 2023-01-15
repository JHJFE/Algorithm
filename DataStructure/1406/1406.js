//  splice 사용한 방법 동작 비교 ㄱㄱ

const { default: test } = require('node:test');
const { basename } = require('path');
const { off } = require('process');

// 구현시간 : 25분
// 실행시간 : 0.073sec
// const { default: test } = require('node:test');
// const input = require('fs').readFileSync('1406/Input.txt','utf8').trim().split('\n');
// let arr = input[0].split('');
// const testCase = +input[1];
// const Maxpos = arr.length-1;

// let pos = arr.length;

// for(let i =2 ; i <= testCase+1; i++){
//     let misson = input[i].split(' ');
//     solution(misson[0], misson[1]);

// }

// function solution(Do, value){

//     if(Do === 'L'){
//         if(pos !== -1){
//             pos = pos-1;
//         }
//     }else if(Do ==='D'){
//         if(pos !== Maxpos){
//             pos = pos+1;
//         }
//     }else if (Do === 'B'){
//         if(pos !== 0){

//             pos = pos-1;
//             console.log(arr);
//             console.log(pos);
//             arr.splice(pos,1);
//         }
//     }else if(Do === 'P'){
//         if(pos !== -1){
//             arr.splice(pos,0,value); // pos 
//         }else{
//             arr.splice(0,0,value); 
//         }
//         pos = pos+1;
//     }

// }
// console.log(arr);


//////////////////////////////////////////////
// 큐으로 구헌
// 구현시간 : 04
// 실행시간 :

const input = require('fs').readFileSync('1406/input.txt', 'utf8').trim().split('\n');

const testCase = +input[1];
const firstArray = input[0].split('');

let before = firstArray;
let after = [];
let cursor = firstArray.length;

for (let i = 2; i <= testCase + 1; i++) {
    let arr = input[i].split(' ');
    let range = before.length;
    let cnt = 0;
    switch (arr[0]) {
        case 'L':
            if (cursor !== 0) {
                cursor -= 1
            }
            break;
        case 'D':
            if (cursor !== after.length + before.length) {
                cursor += 1
            }
            break;
        // d m x i l   ==> d m x l 
        case 'B':
            if (cursor > 0) {
                do {
                    after.unshift(before.pop());
                    cnt++;
                } while ((range - cursor) >= cnt);
            }
            after.shift();
            cursor -= 1;
            break;
        case 'P':
            if (cursor <= before.length) {
                
                while ((range - cursor) > cnt) {
                    if (before.length !== 0) {
                        after.unshift(before.pop());
                    }
                        cnt++;
                    
                }
            }
         
            before.push(arr[1]);
            cursor += 1;
            break;
    }
    before = [...before, ...after];
    after = [];
}
console.log(before);
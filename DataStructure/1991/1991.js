const { isNativeError } = require('util/types');

const Input = require('fs').readFileSync('/Users/junghojae/Documents/GitHub/Algorithm/DataStructure/1991/input.txt', 'utf8');
const input = Input.trim().split('\n');

const nodeNum = +input[0];


class Tree {
    constructor() {
        this.data = '.';
        this.left = '.';
        this.right = '.';
    }
    insert(data,left,right){
        if(this.data === '.'){
            this.data = data;
            this.left = left;
            this.right = right;
        }else if(this.left === data){
            this.left = new Tree;
            this.left.data = data;
            this.left.left = left;
            this.left.right = right;
        }else if(this.right === data){
            this.right = new Tree;
            this.right.data = data;
            this.right.left = left;
            this.right.right = right;
        }

    }
}
let a = new Tree();

for (let i = 1; i <= nodeNum; i++) {
    let [...line] = input[i].split(' ');
    a.insert(...line);
}
console.log(a);

//  depth 2까지의 트리 구현 
//  depth n까지 추가 구현할 예정


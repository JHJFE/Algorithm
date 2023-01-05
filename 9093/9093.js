//00:27:00
//단어 뒤집기
const line  = require('fs').readFileSync('/Users/junghojae/Documents/GitHub/Algorithm/9093/input.txt','utf8');
const input = line.trim().split('\n');
const testCaseNum = +input[0];
let result = []
for(let i = 1;i <= testCaseNum ;i++){

    const arr = input[i].split(' ');
    solution(arr);
    
}

function solution(arr){
    
    let result = [];
    
    for(let i =0;i<arr.length;i ++){
        let word = arr[i];
        let oneWord = [...word];
        //let oneWord = word.split("");
       // console.log(word);
           
        for(let i = 0 ; i<oneWord.length/2 ;i++){

            let temp = oneWord[i];
            oneWord[i] = oneWord[oneWord.length-1-i];
            oneWord[oneWord.length-1-i] = temp;
            
        }
        result[i] = oneWord.join('');
       

    }
    result = result.join(" ");
    console.log(result);

}
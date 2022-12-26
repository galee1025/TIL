// 🤯 유한소수 판별하기
// 내 풀이
function solution(a,b) {
  let g = 1;
  
  for(let i=1; i<=b; i++) {
    if(a%i===0 && b%i===0) g = i;
  }

  let bb = b/g;
  
  while(bb%2 === 0) bb = bb/2
  while(bb%5 === 0) bb = bb/5
  
  return bb === 1 ? 1 : 2;
}

// 다른 풀이 
// 나눈 값을 문자열로 바꾼 길이가 10(2,5)보다 길면 무한소수 2, 아니면 유한소수 1
function solution(a, b) {
    return (a/b).toString().length > 10 ? 2 : 1
}



// 겹치는 선분의 길이
// 내 풀이
const solution = (lines) => {
  let newLines = [];
  let answer = [];
  
  lines.forEach((v, idx) => {
    for(let j=v[0]; j<v[1]; j++) {
      newLines.push(j);
    }
  });
  
  newLines.sort();
    
  for(let item of newLines) {
    if(newLines.indexOf(item) !== newLines.lastIndexOf(item)) {
      answer.push(item);
    }
  }
  
  answer = new Set(answer);
  return [...answer].length;
}

// 다른 풀이
function solution(lines) {
    let min = Math.min(...lines.flat());
    let max = Math.max(...lines.flat());
    let arr = Array(max-min+1).fill(0);

    for (let line of lines) {
        line.sort((a,b)=>a-b);
        if (min < 0) {
            line[0]+=Math.abs(min)
            line[1]+=Math.abs(min)
        }
        for (let i = line[0]; i < line[1]; i++) arr[i]++;
    }

    return arr.filter(v=>v>1).length;
}

// 다른 풀이 2
function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}




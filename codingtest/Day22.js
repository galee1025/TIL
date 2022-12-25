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

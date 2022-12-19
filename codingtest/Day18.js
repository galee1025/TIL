// 문자열 정렬하기 2
// 내 풀이
const solution = (my_string) => {
  return my_string.toLowerCase().split('').sort().join('');
}



// 세균 증식
// 내 풀이
const solution = (n, t) => {
  let answer = n;  
  for(let i=1; i<=t; i++) {
    answer *= 2;
  }
  return answer;
}

// 다른 사람 풀이 : 시프트 연산자, 2진수로 표현된 비트를 이동시키는 연산자
function solution(n, t) {
  return n << t;
}



// 제곱수 판별하기
// 내 풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2
}

// 다른 사람 풀이
function solution(n) {
    var sqrt = Math.sqrt(n);
    for (let i = 1; i <= sqrt; i++){
        if (i*i == n){
            return 1;
        }
    }
    return 2;
}



// 문자열 안에 문자열
// 내 풀이
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

// 다른 사람 풀이 : 
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}



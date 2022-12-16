// 숫자 찾기
// 내 풀이
const solution = (num, k) => {
  let answer = -1;
  const arr = String(num).split('');
  
  for(let i=0; i<=arr.length; i++) {
    if(arr[i] === String(k)) {
      answer = arr.indexOf(arr[i]) + 1;
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}



// n의 배수 고르기
// 내 풀이
const solution = (n, numlist) => {
  let answer = [];
  for(let i of numlist) {
    if(i%n === 0) {
      answer.push(i);
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}



// 자릿수 더하기
// 내 풀이
const solution = n => {
  const arr = [...String(n)];
  return arr.map(v => +v).reduce((a,b) => a+b); 
}

// 다른 사람 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}



// OX퀴즈
// 내 풀이
const solution = quiz => {
  let arr = [...quiz];
  let answer = [];
  
  for(let i=0; i<arr.length; i++) {
    arr[i] = arr[i].replace('=', '===');
  }
  
  for(let i of arr) {
    if(!eval(i)) {
      answer.push('X');
    } else {
      answer.push('O');
    }
  }
  
  return answer;
}

// 다른 사람 풀이 : 매개변수를 ' = '로 split, 다시 map으로 값 비교 후 반환
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}



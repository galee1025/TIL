// 모음 제거
// 내 풀이
const findDup = (arr) => {
  const aeiou = [..."aeiou"];
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<aeiou.length; j++) {
      if(arr[i] === aeiou[j]) {
        arr.splice(i, 1);
        findDup(arr);
        break;
      }
    }
  }
}

function solution(my_string) {
  let arr = [...my_string];
  findDup(arr);
  return arr.join('');
}

// 다른 사람 풀이
// : str.replace(/특정문자/g,'') : 특정문자 제거
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) {
  return [...my_string].filter(v => ![...'aeiou'].includes(v)).join('');
}

// 대부분 replace() 이용, 난 너무 어렵게 푼 것 같음
// 함수 반복으로 모음을 제거하려고 재귀함수 이용했는데 비효율적으로 보임
// 콜백을 잘 모르니 filter도 그렇고 includes도 못 쓰는 것



// 문자열 정리하기(1)
// 내 풀이 : filter,includes,map,sort 난리
function solution(my_string) {
  let arr = [...my_string].filter(v=>[...'0123456789'].includes(v));
  return arr.map(v => parseInt(v)).sort();
}

// 다른 사람 풀이 : isNaN
function solution(my_string) {
    return my_string.split("").filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b)
}



// 숨어있는 숫자의 덧셈(1)
// 내 풀이
const solution = (my_string) => {
  let answer = 0;
  [...my_string].filter(v => !isNaN(v)).map(v => answer += (v*1));
  return answer;
}

// 다른 사람 풀이 : 정규 표현식과 reduce
function solution(my_string) {
    return my_string.replaceAll(/[^\d]/g, '').split('').map(v=>+v).reduce((a,v)=>a+v,0);
}



// 🤯 소인수분해
// 찾아본 풀이
function solution(n) {
  let answer = [];
  let i = 2;
  
  while(n >= 2) {
    if(n%i === 0) {
      answer.push(i);
      n /= i;
    } else {
      i++;
    }
  }
  return [...new Set(answer)];
}




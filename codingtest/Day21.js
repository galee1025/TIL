// 숨어있는 숫자의 덧셈 2
// 내 풀이 : 정규식, replace로 빈 문자열로 변경, 길이가 1 이상인 값만 남기고, 
// 배열 길이가 0이면 0 반환, 아닐 경우 reduce 이용해 각각 요소 더하기
const solution = (my_string) => {
  const regex = /[^0-9]/g;
  const arr = my_string.replace(regex, " ");
  let answer = arr.split(' ').filter(v => v.length > 0);

  return answer.length === 0 ? 
  0 : answer.map(v => parseInt(v)).reduce((a,b) => a+b);
}

// 다른 풀이
// v*1을 통해 숫자로 변경 할 수 있음
function solution(my_string) {
    return my_string.toLowerCase().replace(/[a-z]/g, " ").split(" ").map((v) => v*1).reduce((a,b) => a+b)
}



// 삼각형의 완성조건 2
// 내 풀이
const solution = (sides) => {
  const arr = sides.sort((a,b) => a-b);
  let answer = [];

  for(let i=arr[1]-arr[0]+1; i<=arr[1]; i++) {
    answer.push(i);
  }
  for(let j=arr[1]+1; j<arr[0]+arr[1]; j++) {
    answer.push(j);
  }
  
  return answer.length;
}

// 다른 풀이
function solution(sides) {
    return Math.min(...sides)*2-1
}



// 🤯 외계어 사전
// 내 풀이
function solution(spell, dic) {
// spell을 sort해 정렬한 뒤 join
  const arr = spell.sort().join('');
// dic을 나눈뒤 sort, 다시 join
  let answer = dic.map(v => v.split('').sort().join(''));
// dic을 가공한 answer에서 spell과 같은 게 있다면 1, 아니면 2 반환
  return answer.find(v => v===arr) !== undefined ? 1 : 2
}



// 저주의 숫자 3 : 22일차 문제
// 내 풀이
const find3X = (arr) => {
  return arr.filter(v => !(v%3 == 0) && !(String(v).includes('3')));
}

const solution = (n) => {
  let nArr = Array(n+n).fill(0).map((v,i) => i+1);
  const answer = find3X(nArr);
  
  return answer[n-1];
}

// 다른 풀이
function solution(n) {
    let arr = [];
    let num = 0;
  
  // 배열의 길이가 n값과 같지 않으면 num 숫자를 늘린다(arr.length가 n값이 되면 멈춘다)
    while(arr.length !== n && ++num) {
  // 만약 숫자가 3의 배수가 아니고 3을 포함하는 숫자가 아니면 배열에 넣는다.
      if(num%3 !== 0 && !(''+num).includes('3')) {
        arr.push(num);
      }
    }
  // 배열의 마지막값 리턴
    return arr.pop();
}



// 문자열 계산하기
// 내 풀이
// 가장 처음에 만든 배열 : const arr = [...my_string].filter(v => v !== ' ') 
// 테스트 에러, 숫자가 두자리 이상이면 '12' -> '1', '2'가 됨 -> split(' ')으로 변경
const solution = my_string => {
  const arr = my_string.split(' ');
  let answer = parseInt(arr[0]);
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === '+') {
      answer += parseInt(arr[i+1]);
    } else if(arr[i] === '-') {
      answer -= parseInt(arr[i+1]);
    }
  }
  return answer;
}

// 다른 사람 풀이
// : eval() 수학 수식이 문자열 형식으로 들어오면 해당 수식을 계산한 결과를 반환
var solution = eval



// 편지
// 내 풀이
const solution = (message) => {
  return [...message].length*2;
}



// 가장 큰 수 찾기
// 내 풀이
const solution = array => {
  let answer = [];
  array.map((v,i) => {
    if(Math.max(...array) === v) {
      answer.push(v,i);
    }
  })
  return answer;
}

// 다른 사람 풀이
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}



// 배열의 유사도
// 내 풀이
function solution(s1, s2) {
    let answer = 0;
    for(let i of s1) {
        if(s2.includes(i)) {
          answer += 1;
        }
    }
  return answer;
}

// 다른 사람 풀이 : for문!
function solution(s1, s2) {
    var answer = 0;
    for (var i = 0; i < s1.length; i++){
        for (var j = 0; j < s2.length; j++){
            if(s1[i] === s2[j]) answer++;
        }
    }
    return answer;
}




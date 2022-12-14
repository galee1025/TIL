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

// 배열 자르기
// 내 풀이
const solution = (numbers, num1, num2) => {
  let answerArr = [];
  for(let i=num1; i<=num2; i++) {
    answerArr.push(numbers[i]);
  }
  return answerArr;
}



// 외계행성의 나이
// 내 풀이
const solution = age => {
  let answer = [];
  const arr = [...String(age)].map(item => Number(item));
  const planetArr = ['a','b','c','d','e','f','g','h','i','j'];
  
  for(let i=0; i<arr.length; i++) {
    answer.push(planetArr[arr[i]]);
  }
  
  return answer.join('');
}

// 다른 사람 풀이
function solution(age) {
    let char = 'abcdefghij'
    return Array.from(age.toString()).map(t => char[+t]).join('');
}



// 진료순서 정하기
// 내 풀이
const solution = emergency => {
    const arr = [...emergency].sort((a,b) => b-a);
    return emergency.map(v => arr.indexOf(v)+1)
}



// 순서쌍의 개수
// 내 풀이
const solution = n => {
  let answer = [];
  
  for(let i=1; i<=n; i++) {
    if(n%i === 0) {
      answer.push(i);
    }
  }
  return answer.length;
}

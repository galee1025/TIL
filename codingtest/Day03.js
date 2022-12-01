// 나머지 구하기

const solution = (num1, num2) => {
    return num1 % num2
}


// 짝수는 싫어요
// 내 풀이

function solution(n) {
    const answer = [];
    for(let i = 1; i <= n; i++){
        if(i % 2 !== 0){
            answer.push(i)
        }
    }
    return answer;
}

// 다른 사람 풀이_짧고 간결해 보임

function solution(n) {
    const answer = [];
    for (let i = 1; i<=n; i+=2) {
      answer.push(i)
    }
    return answer;
}


// 중앙값 구하기
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 
// 중앙값을 return 하도록 solution 함수를 완성해보세요.

// 내 풀이

function solution(array) {
  let answer = 0;
  
  const newArr = array.sort(function(a,b) {
    return a-b;
  });
  
  const middle = newArr.length / 2
  answer = newArr[Math.round(middle)-1];
  
  return answer;
}

// 다른 사람 풀이_무명함수 이용, round로 반올림이 아니라 floor로 내림 이용

function solution(array) {
    array.sort((a, b) => a - b);
    return array[Math.floor(array.length/2)];
}





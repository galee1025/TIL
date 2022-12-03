// 피자 나눠 먹기 1

// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
// 피자를 나눠먹을 사람의 수 n이 주어질 때, 
// 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// 내 풀이
const solution = n => {
  return Math.ceil(n/7);
}

// 다른 사람 풀이 : 삼항연산자 이용
function solution(n) {
    return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}



// 피자 나눠 먹기 2

// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 
// 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 내 풀이 : while문은 조건이 참일 때 실행된다. 문장이 실행되기 전 조건의 참,거짓을 판단한다.
const solution = (n) => {
  let piece = 6;
  let pizza = 1;

  while(piece % n !== 0) {
    piece += 6;
    pizza++;
  }
  return pizza;
}



// 피자 나눠 먹기 3

// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 
// 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, 
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 내 풀이
// blocker
// slice += slice로 표기, 테스트 케이스에서 slice의 숫자가 매우 많아지고 pizza가 부족하게 return 됐을 것 같다.
// 초기값을 piece로 설정해서 해결
const solution = (slice, n) => {
  const piece = slice;
  let pizza = 1;

  while(slice/n < 1) {
    slice += piece;
    pizza++;
  }
  return pizza;
}

// 다른 사람 풀이
// 사람 수를 조각 수로 나눠 올림
// 비슷한 문제를 또 풀었을 때, 내가 이렇게 생각할 수 있을까?
function solution(slice, n) {
    return Math.ceil(n / slice)
}



// 배열의 평균값

// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 내 풀이
// map으로 풀었을 때보다 for of문이 개인적으론 가독성이 있어 보인다
const solution = (numbers) => {
    let total = 0;
  
    for(let number of numbers) {
      total += number;
    }
    return total / numbers.length;
}

// 다른 사람 풀이
// reduce로 풀이 : 현재 값을 0으로 하고, 무명함수 (a,b) 파라미터로 a+b를 실행
function solution(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}

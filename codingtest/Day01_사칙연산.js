// 두 수의 합
// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
    var answer = num1 + num2;
    return answer;
}


// 두 수의 차
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
// 화살표 함수를 이용해 풀이

const solution = (num1, num2) => num1 - num2


// 두 수의 곱
// 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

const solution = (num1, num2) => num1*num2


// 몫 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 실수를 정수로 바꾸기 위해 Math.floor 함수를 이용

const solution = (num1, num2) => Math.floor(num1 / num2)

// double tilde(~~) 연산자 : Math.floor()와 동등하게 쓰인다
// 가독성이 좋지 않기 때문에 복잡한 코드나 협업 과정에선 지양해야 할 듯

function solution(num1, num2) {
    let answer = num1 / num2
    return ~~answer
}


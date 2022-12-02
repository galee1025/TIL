// 두 수의 나눗셈
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

const solution = (num1, num2) => {
    let answer = num1/num2*1000
    return Math.floor(answer)
}


// 숫자 비교하기
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
// if문

const solution = (num1, num2) => {
    if(num1 == num2) {
        return 1
    } else {
        return -1
    }
}

// 삼항연산자
// 가독성 높아짐

const solution = (num1, num2) => {
    return num1 === num2 ? 1 : -1
}


// 분수의 덧셈 🥲
// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// 유클리드 호제법?

function solution(denum1, num1, denum2, num2) {
    let answer = [];

    let denum = denum1*num2 + denum2*num1
    let num = num1*num2
    let maxNum = 1;

    for(let i=1; i<=denum; i++) {
        if(denum%i === 0 && num%i === 0) {
            maxNum = i
        }
    }
    answer = [denum/maxNum, num/maxNum]
    return answer;
}



// 배열 두 배 만들기
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
// for of 사용

function solution(numbers) {
    let answer = [];
    for(let i of numbers) {
        answer.push(i*2)
    }
    return answer;
}

// map 함수 사용해보기
// 가독성이 높아짐

const solution = (numbers) => {
    return numbers.map(number => number*2)
}



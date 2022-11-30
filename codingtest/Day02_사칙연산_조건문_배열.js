// 두 수의 나눗셈

const solution = (num1, num2) => {
    let answer = num1/num2*1000
    return Math.floor(answer)
}


// 숫자 비교하기
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


// 분수의 덧셈
// 유클리드 호제법? 도전중!



// 배열 두 배 만들기
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

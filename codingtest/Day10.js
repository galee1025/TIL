// 점의 위치 구하기
// 내 풀이
const solution = (dot) => {
  const x = dot[0];
  const y = dot[1];
  
  if(x > 0 && y > 0) {
    return 1;
  } else if(x < 0 && y > 0) {
    return 2;
  } else if(x < 0 && y < 0) {
    return 3;
  } else if(x > 0 && y < 0) {
    return 4;
  }
}

// 다른 사람 풀이 : 구조 분해
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}



// 2차원으로 만들기
// 내 풀이
const solution = (num_list, n) => {
  let answer = [];
  let arr = [...num_list];

  for(let i=0; i<arr.length; i+=n) {
    answer.push(arr.slice(i, i+n));
  }
  return answer;
}

// 다른 사람 풀이 
// : while문 사용, 조건이 참일 때까지 반복, 매개변수의 길이가 falsy한 값이 될 때까지 잘라낸 값을 새로운 배열에 push()
// : 더 직관적, 어떤 코드인지 쉽게 이해가 된다.
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}



// 배열 회전시키기
// 내 풀이
const solution = (numbers, direction) => {
  let arr = [...numbers];

  if(direction === "right") {
    const right = arr.pop();
    return [right, ...arr];
  } else {
    const left = arr.shift();
    return [...arr, left];
  }
}

// 다른 사람 풀이 : 삼항연산자, unshift() 
// : 변수 선언 없이 진행되서 메모리 차지 없이 풀 수 있다!
function solution(numbers, direction) {
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
}



// 공 던지기
// 내 풀이
const solution = (numbers, k) => {
  let arr = [1];
  let answer = 1;

  for(let i=0; i<=k; i++) {
    arr.push(answer += 2);
    if(answer === numbers.length-1) {
      arr.push(answer = 1);
    } else if(answer === numbers.length) {
      answer = 0;
    }
  }
  return arr[k-1];
}

// 다른 사람 풀이
function solution(numbers, k) {
    return numbers[(--k*2)%numbers.length];
}



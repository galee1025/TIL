// 주사위의 개수
// 내 풀이
const solution = (box, n) => {
  const newArr = box.map(v => ~~(v/n));
  let answer = newArr[0];
  for(let i=1; i<3; i++) {
    answer *= newArr[i];
  }
  return answer;
}

// 다른 사람 풀이 : 구조 분해 할당!
function solution(box, n) {
    let [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}



// 팩토리얼
// 내 풀이
const facto = (n) => {
    if(n > 1) {
        return n*facto(n-1)
    } else {
        return n
    }
}

const solution = (n) => {
    let answer = 0;
    for(let i=1; i<=n; i++) {
        if(n >= facto(i)) {
            answer = i;
            continue
        } else {
            break
        }
    }
    return answer;
}

// 다른 사람 풀이 : 멋져
function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}



// 최댓값 만들기(1)
// 내 풀이
const solution = numbers => {
  let arr = [...numbers];
  arr.sort((a,b) => a-b);
  return arr[arr.length-1]*arr[arr.length-2];
}

// 다른 사람 풀이 : 반대(내림차순)로 풀이!
function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}



// 🤯 합성수 찾기
// 찾아본 풀이 : set을 이용해 반복 제거, 배열로 바꾸고 길이 반환 or 배열로 바꾸지 않고 answer.size 반환
const solution = (n) => {
  let arr = new Set();
  for(let i=1; i<=n; i++) {
    for(let j=2; j<i; j++) {
      if(i%j === 0) {
        arr.add(i);
      }
    }
  }
  const answer = [...arr];
  return answer.length;
}

// 다른 사람 풀이 : 난 이렇게 풀고 싶었다
function solution(n) {
  let answer = 0;
  for(let i=1; i<=n; i++) {
    let count = 0;
    for(let j=1; j<=i; j++) {
      if(i%j === 0) {
        count++;
      }
    }
    if(count>=3) answer++;
  }
  return answer;
}




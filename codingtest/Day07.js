// 특정 문자 제거하기
// 내풀이
const solution = (my_string, letter) => {
  let arr = [...my_string];
  return arr.filter(i => i !== letter).join('');
}

// 다른 사람 풀이 : for문 잘 쓰고 싶다
function solution(my_string, letter) {
    let str = "";
    const arr = my_string.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== letter) str += arr[i];
    }
    return str;
}



// 각도기
// 내 풀이
const solution = (angle) => {
  if(angle < 90) return 1;
  if(angle == 90) return 2;
  if(angle < 180) return 3;
  if(angle == 180) return 4;
}

// 다른 사람 풀이
// : 각도를 배열로 만들어 filter()로 각 요소가 매개변수 이상인 배열의 길이.
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}



// 양꼬치
// 내 풀이
const solution = (n, k) => {
    let total = 0;
    const yang = 12000 * n;
    const drink = 2000 * k;
    total = yang + drink;
    for(let i=1; i<=n/10; i++) {
        total -= 2000;
    }
    return total;
}

// 다른 사람 풀이
function solution(n, k) {
    let lamb = n*12000;
    let drink = k*2000;
    return lamb+drink-parseInt(n/10)*2000;
}



// 짝수의 합
// 내 풀이
const solution = n => {
  let answer = 0;
  for(let i=0; i<=n; i++) {
    if(i%2 === 0) {
      answer += i;
    }
  }
  return answer;
}

// 다른 사람 풀이
// : n개의 수 중 짝수는 그 반인 n/2개
// : 짝수는 항상 홀수보다 1이 크다
function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}

function solution2(n) {
  let half = Math.floor(n/2);
  return half*half+half;
}



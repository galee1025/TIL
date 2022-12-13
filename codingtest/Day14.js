// 369 게임
// 내 풀이
const solution = (order) => {
  let clap = [];

  [...String(order)].map(v => {
    if(v === '3' || v === '6' || v === '9') {
      clap.push(v);
    }
  })
  return clap.length;
}

// 다른 사람 풀이 : matchAll()
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}



// 암호 해독
// 내 풀이
function solution(cipher, code) {
  const arr = [...cipher];
  let answer = '';
  for(let i=code-1; i<cipher.length; i+=code) {
    answer += arr[i];
  }
  return answer;
}

// 다른 사람 풀이 : filter
function solution(cipher, code) {
    return cipher.split("").filter((v, index) => (index+1)%code === 0).join("");
}



// 대문자와 소문자
// 내 풀이
const solution = (my_string) => {
  const arr = [...my_string];
  let newArr = [];

  for(let i of arr) {
    if(i === i.toUpperCase()) {
      newArr.push(i.toLowerCase());
    } else {
      newArr.push(i.toUpperCase());
    }
  }
  return newArr.join('');
}

// 다른 사람 풀이
function solution(my_string) {
    let answer = '';
    const bigRegExp = /[A-Z]/g;
    const smallRegExp = /[a-z]/g;
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i].match(bigRegExp)) {
            answer += my_string[i].toLowerCase();
        } else if (my_string[i].match(smallRegExp)) {
            answer += my_string[i].toUpperCase();
        }
    }
    return answer;
}



// 가까운 수
// 내 풀이
function solution(array, n) {
  let arr = [];
  let newArr = [];
  arr = array.map(v => Math.abs(v-n));

  for(let i=0; i<=arr.length; i++) {
    if(arr[i] === Math.min(...arr)) {
      newArr.push(array[i])
    }
  }
  return Math.min(...newArr);
}

// 다른 사람 풀이 : reduce 이용..
function solution(array, n) {
    return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
}




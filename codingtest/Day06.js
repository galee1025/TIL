// 문자열 뒤집기
// 내 풀이
const solution = (my_string) => {
  const arr = [...my_string];
  return arr.reverse().join('');
}

// 다른 사람 풀이 
// : Array.from() 유사 배열 객체(array-like object)나 
// : 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만듭니다.
function solution(my_string) {
    return Array.from(my_string).reverse().join('');
}



// 짝수 홀수 개수
// 내 풀이
const solution = (num_list) => {
  const even = [];
  const odd = [];
  
  num_list.map(item => {
    if(item%2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  })
  
  return [even.length, odd.length]
}

// 다른 사람 풀이
// 나머지를 인덱스 값으로 해서 짝수, 홀수로 나눈 뒤 += 1
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}



// 문자 반복 출력하기
// 내 풀이
const solution = (my_string, n) => {
  const answer = [];
  for(let i=0; i<my_string.length; i++) {
    for(let j=1; j<=n; j++) {
      answer.push(my_string[i])
    }
  }
  return answer.join('')
}

// 다른 사람 풀이
// : repeat() : 문자열을 주어진 횟수()만큼 반복해 붙인 새로운 문자열을 반환합니다
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join('');
    return answer;
}



// 직사각형 출력하기
// 내 풀이 : '\n'
const solution = (n) => {
  let answer = '';
  const star = '*';
  for(let i=0; i<n; i++) {
    for(let j=0; j<=i; j++) {
      answer+=star;
    }
  answer+='\n';
 }
 console.log(answer)
}

// 다른 사람 풀이 : repeat()!!!
function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}

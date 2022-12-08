// 가위 바위 보
// 내 풀이
const solution = (rsp) => {
  let answer = [];
  const arr = [...rsp];
  arr.map(v => {
    if(v === "2") {
      answer.push("0");
    } else if(v === "0") {
      answer.push("5")
    } else if(v === "5") {
      answer.push("2")
    }
  })

  return answer.join('');
}

// 다른 사람 풀이 : 객체로 풀이
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}



// 🤯 구슬을 나누는 경우의 수
// 찾아본 풀이 : 팩토리얼 함수를 따로 만들어 팩토리얼값으로 계산하기
// BigInt()를 이용해 자바스크립트가 안정적으로 계산할 수 있도록 한다.
const solution = (balls, share) => {
  const answer = factorial(balls)/(factorial(balls-share)*factorial(share));
  return answer;
}

const factorial = (num) => {
  let returnFacto = BigInt(1);
  for(let i=2; i<=num; i++) {
    returnFacto *= BigInt(i)
  }
  return returnFacto;
}

// 다른 사람 풀이
// 재귀함수를 이용해 팩토리얼 구현
const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

const solution = (balls, share) => {
  return Math.round(factorial(balls) / factorial(balls - share) / factorial(share))
}



// 모스부호(1)
// 내 풀이
const MORSE = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

const solution = (letter) => {
  const morseArr = [...Object.keys(MORSE)];
  const letterArr = letter.split(' ');
  let answerArr = []; 
  return letterArr.map(v => MORSE[v]).join('');  
}



// 개미 군단
// 내 풀이 : 어렵게 푼 사람
const solution = (hp) => {
  const general = 5;
  const soldier = 3;
  const worker = 1;
  
  let count = ~~(hp/general);
  hp -= count*general;

  if(hp === 0) return count;
  if(hp >= soldier) {
    hp -= soldier;
    count++;
  }
  return count+hp;
}

// 다른 사람 풀이 : 나머지 활용
function solution(hp) {
    return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
}

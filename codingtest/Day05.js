// 옷 가게 할인 받기

// 내 풀이
const solution = (price) => {
  if(price >= 500000) {
    return Math.floor(price * 0.8)
  } else if(price >= 300000) {
    return Math.floor(price * 0.9)
  } else if(price >= 100000) {
    return Math.floor(price * 0.95)
  } else {
    return Math.floor(price)
  }
}



// 아이스 아메리카노
// 내 풀이
const solution = (money) => {
  let answer = [];
  const shot = Math.floor(money/5500);
  const changes = Math.floor(money%5500);

  return answer = [shot, changes];
}

// 다른 사람 풀이 
// : 배열 안에 Math.floor() 함수를 넣은게 깔끔해 보이지 않아서 위처럼 풀이
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}



// 나이 출력
// 내 풀이
const solution = (age) => {
    const nowYear = 2022;
    let bornYear = 0;
    bornYear = (nowYear - age) + 1;
    return bornYear
}

// 다른 사람 풀이 
// : new Date().getFullYear() = 현재 연도 : 재사용 가능한 코드
function solution(age) {
    return new Date().getFullYear() - age + 1;
}



// 배열 뒤집기
// 내 풀이 
// : reverse() 써 본적이 있어서 다행이다
const solution = (num_list) => {
  return num_list.reverse();
}

// 다른 사람 풀이
const solution = (num_list) => {
  let newList = [];
  const arrLength = num_list.length;
  for(let i=1; i<=arrLength; i++) {
    newList.push(num_list[arrLength - i])
  }
  return newList;
}




// 배열 원소의 길이
// 내 풀이
const solution = (strlist) => {
  return [...strlist].map(v => v.length);
}

// 다른 사람 풀이 : map, length 사용하지 않은 풀이
function solution(strlist) {
    var answer = [];
    for(let i=0; i < strlist.length; i++) {
        let strCnt = 0;
        const strArr = strlist[i].split('')
        for(let j = 0; j < strArr.length; j++) {
            strCnt++
        }
        answer.push(strCnt)
    }
    return answer;
}



// 중복된 문자 제거
// 내 풀이
const solution = (my_string) => {
  const arr = new Set([...my_string]);
  return [...arr].join('');
}

// 다른 사람 풀이 
// : 인덱스가 일치하는지 filter, filter()에 있는 인덱스를 잘 이용한 풀이
const solution = str => [...str].filter((v,i)=>str.indexOf(v)===i).join('')

// 이해 돕기
const arr = [...my_string];
for(let i=0; i<arr.length; i++) {
  console.log(arr.indexOf(arr[i])===i);
}


// 삼각형의 완성조건 (1)
// 내 풀이
const solution = (sides) => {
  const arr = sides.sort((a,b) => b-a);
  return arr[1]+arr[2]<=arr[0] ? 2 : 1;
}

// 다른 사람 풀이 : 구조 분해 할당
function solution(sides) {
    const [side1, side2, side3] = sides.sort((a,b) => a-b); 
    return side3 >= side1+side2 ? 2 : 1;
}

// 다른 사람 풀이2 : Math.max 이용, reduce 이용
function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const sum = sides.reduce((a,b) => a + b, 0) - max;

    answer = max < sum ? 1 : 2;

    return answer;
}



// 🤯 컨트롤 제트
// 찾아본 풀이
const solution = (s) => {
  let answer = 0;
  const arr = s.split(' ');
  while(arr.includes('Z')) {
    arr.splice(arr.indexOf('Z')-1, 2);
  }
  arr.map(v => v*1).forEach(v => answer+=v);
  return answer;
}

// 다른 사람 풀이 : 가독성이 높다, for of문, reduce()
function solution(s) {
    const stack = [];

    for (const num of s.split(" ")) {
        if (num === "Z") {
            stack.pop();
        } else {
            stack.push(+num)
        }
    }
    return stack.reduce((a,b) => a + b, 0);
}




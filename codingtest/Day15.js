// 인덱스 바꾸기
// 내 풀이
function solution(my_string, num1, num2) {
  const arr = [...my_string];
  arr[num1] = my_string[num2];
  arr[num2] = my_string[num1];
  return arr.join('');
}

// 다른 사람 풀이 : 구조 분해 할당
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}



// 한 번만 등장한 문자
// 내 풀이
const solution = (s) => {
  let Obj = {};
  let answer = [];
  [...s].map((v) => {
    !Obj[v] ? Obj[v]=1 : Obj[v]+=1;
  })
  
  for(let i in Obj) {
    if(Obj[i] === 1) {
      answer.push(i);
    }
  }
  
  return answer.sort().join('');
}

// 다른 사람 풀이
// indexOf()와 lastIndexOf() 사용
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}



// 약수 구하기
// 내 풀이


// 다른 사람 풀이 
// 1~n까지의 비어있는 배열을 0으로 채우고, map을 돌려 값을 넣어준다. 
// 그 후 filter로 나눴을 때 나머지가 0인 수 반환.
function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}



// 🤯 영어가 싫어요
// 내 풀이 : replace() -> replaceAll() : 테스트 통과 
function solution(numbers) {
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numArr.forEach((v,i) => {
        numbers = numbers.replaceAll(v, i);
    });
    return parseInt(numbers)
}

// 다른 사람 풀이 : 콜백 ㅜㅜ
function solution(numbers) {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };

    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return obj[v];
    });

    return Number(num);
}

// 다른 사람 풀이 : new RegExp : 정규 표현식
function solution(numbers) {
    let arr = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
    for (let i in arr) numbers = numbers.replace(new RegExp(arr[i], 'g'), +i);
    return +numbers;
}




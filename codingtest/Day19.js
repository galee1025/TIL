// 7의 개수
// 내 풀이
const solution = (array) => {
  const arr = array.join('').split('');
  if(arr.includes('7')) {
    return arr.filter(v => v === '7').length;
  } else {
    return 0
  }
}

// 다른 사람 풀이
function solution(array) {
    return array.join('').split('7').length-1;
}



// 잘라서 배열로 저장하기
// 내 풀이
const solution = (my_str, n) => {
  let answer = [];
  for(let i=0; i<my_str.length; i+=n) {
    answer.push([...my_str].splice(i, n).join(''))
  }
  return answer
}



// 중복된 숫자 개수
// 내 풀이
const solution = (array, n) => {
  return array.filter(item => item===n).length;
}



// 머쓱이보다 키 큰 사람
// 내 풀이
const solution = (array, height) => {
    return array.filter(el => el>height).length;
}




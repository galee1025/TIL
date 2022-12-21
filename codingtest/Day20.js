// 🤯 직사각형 넓이 구하기
// 찾아본 풀이
const solution = dots => {
  let width = 0;
  let height = 0;
  
  width = Math.max(...dots.map(v => v[0])) - Math.min(...dots.map(v => v[0]))
  height = Math.max(...dots.map(v => v[1])) - Math.min(...dots.map(v => v[1]))
  
  return width*height
}

// 다른 풀이
function solution(dots) {
    let x = [],
        y = [];

    for (let i of dots) {
        x.push(i[0]);
        y.push(i[1]);
    }

    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}



// 🤯 다항식 더하기
// 찾아본 풀이
function solution(p) {
    let [x, c] = p.split('+').reduce(([a,b],s) => {
        if (s.includes('x')) {
            return [a + Number(s.trim().replace('x','') || 1), b];
        }
        return [a, b + Number(s)];
    }, [0, 0]);

    if (!x && !c) return '0';
    if (!x) return c.toString();
    x = `${x==1?'':x}x`;
    if (!c) return x;
    return `${x} + ${c}`;
}

// 다른 풀이 : 이해하기 쉽게 잘 정리해 놓은 것 같다. 
// parseInt에서 10진수로 숫자 바꾼 것 참고.
// 생각한 풀이랑 비슷
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}



// 캐릭터의 좌표
// 내 풀이
const solution = (key, board) => {
  let x = 0;
  let y = 0;
  
  const maxX = Math.round(board[0] / 2) - 1;
  const maxY = Math.round(board[1] / 2) - 1;
  
  for(let v of key) {
    if(v === 'left' && x > -1 * maxX) {
      x -= 1;
    } else if(v === 'right' && x < maxX) {
      x += 1;
    } else if(v === 'up' && y < maxY) {
      y += 1;
    } else if(v === 'down' && y > -1 * maxY) {
      y -= 1;
    }
  }
    
  return [x, y];
}



// 최댓값 만들기 2
// 내 풀이
const solution = (numbers) => {
  let answerArr = [];

  for(let i=0; i<numbers.length; i++) {
    for(let j=0; j<numbers.length; j++) {
      if(i !== j) {
        answerArr.push(numbers[i] * numbers[j]);
      }
    }
  }

  return Math.max(...answerArr);
}

// 다른 풀이 : if문 없이
function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...answer);
}



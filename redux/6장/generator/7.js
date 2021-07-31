//사가함수
function* minsu() {
  const myMsgList = [
    "안녕 나는 민수야",
    "만나서 반가원",
    "내일 영화 볼래?",
    "시간 안 되니?",
    "내일모레는 어때?",
  ];
  for (const msg of myMsgList) {
    console.log("수지: ", yield msg);
  }
}


//사가미들웨어
function suji() {
  const myMsgList = ["", "안녕 나는 수지야", "그래 반가워", "..."];
  const gen = minsu();
  for (const msg of myMsgList) {
    console.log("민수: ", gen.next(msg).value);
  }
}

function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch ((action, type)) {
      case SAY_HELLO:
        const random = Math.floor(Math.random() * 10 + 1);
        draft.msg = `안녕하세요, ${action.name}님의 행우늬 숫자는 ${random}입니다`;
        break;
      case INCREMENT:
        callApi({ url: "/sendActionLog", data: action });
        draft.value += 1;
        break;
    }
  });
}
// 리듀서는 순수함수로 작성 -> 부수 효과가 없어야한다
// 서버api를 호출하면안된다.
//random, time같은 변하는 함수로하면안된다 차라리 action에서 넘겨줄때 랜덤값을 넘겨주어야한다.

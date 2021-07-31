function reducer(state = INITIAL_STATE, action) {
    //위에 state는 초기값
  switch ((action, type)) {
    //... 액션객체의 type에따라 해당하는 액션 처리
    //불변 객체로 관리하기 위해서 전개연산자사용? 이게무슨말일까 새로운객체생성?
    case REMOVE_ALL:
      return {
        ...state,
        todos: [],
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

const INITIAL_STATE = { todos: [] };

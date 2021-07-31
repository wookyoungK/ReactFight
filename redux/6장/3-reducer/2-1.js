function reducer(state = INITIAL_STATE, action) {
  switch ((action, type)) {
    case REMOVE_ALL:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: getNEWId(), title: action.title, priority: action.priority },
        ],
      };
  }
}
//수정하려는 데이터가 깊은곳에 있다면 번거롭다 그래서 2-2 확인
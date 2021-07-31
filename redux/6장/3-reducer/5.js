function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action, type) {
      case ADD:
        draft.todos.push(action.todo)
        break;
      case REMOVE_ALL:
        draft.todos =[];
        break;
      case REMOVE:
        draft.todos = drafty.todos.filter(todo => todo.id !== action.id);
        break;
      default:
        break;
    }
  })
}

const INITIAL_STATE = { todos: [] };
//immer를 사용해서 1.js를 간단한게 
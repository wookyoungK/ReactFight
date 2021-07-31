const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.todos.push(action.todo),
  [REMOVE_ALL]: (state) => (state.todos = []),
  [REMOVE]: (state, action) =>
    (state.todos = state.todos.filter((todo) => todo.id !== action.id)),

});
//리덕스를 사용하는 많은사람들이 createReducer라는 함수를 만들어서 많이 사용한다.!

//객체를 만들어서 핸들러함수를 작성
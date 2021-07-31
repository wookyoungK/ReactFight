store.dispatch({ type: "todo/ADD", title: "영화 보기", priority: "high" });
store.dispatch({ type: "todo/REMOVE", id: 123 });
store.dispatch({ type: "todo/REMOVE_ALL" });
// dispatch 액션이 발생했다는 것을 리덕스에게 알려주는 함수
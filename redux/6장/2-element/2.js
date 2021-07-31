function addTodo({ title, priority }) {
  return { type: "todo/ADD", title, priority };
}

function removeTodo({ id }) {
  return { type: "todo/REMOVE", id };
}

function removeALLTodo({}) {
  return { type: "todo/REMOVE_ALL" };
}

store.dispatch(addTodo());

store.dispatch(removeTodo({ id: 123 }));
store.dispatch(removeALLTodo());

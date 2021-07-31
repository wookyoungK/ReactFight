export const ADD = "todo/ADD";
export const REMOVE = "todo/REMOVE";
export const REMOVE_ALL = "todo/REMOVE_ALL";

export function addTodo({}) {
  return { type: ADD, title, priority };
}
export function removeTodo({}) {
  return { type: REMOVE, id };
}
export function removeALLTodo({}) {
  return { type: REMOVE_ALL };
}

//action type은 reducer 에서도 사용할것이기 때문에 상수변로 만드는게좋다.
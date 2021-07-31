import produce from "immer";

const person = { name: "mike", age: 22 };
const newPerson = produce(person, (draft) => {
  draft.age = 32;
});

//불변객체를 쉽게 관리하기위한 라이브러리 immer

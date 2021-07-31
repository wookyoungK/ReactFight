function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch ((action, type)) {
      case SET_SELECTED_PEOPLE:
        draft.selectedPeople = action.id
        break;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find((item) => item.id === action.id);
        people.name = action.name;
        break;
    }
  });
}
//객체를 가리킬때는 객체의 레퍼런스가아니라 고유한 네임값을 가리키는것이좋다
//이전 레퍼런스를 참조하고있기때문에 혼동이 올수있다.
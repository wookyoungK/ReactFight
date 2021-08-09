import { createAction, handleActions } from 'redux-actions';

const SET_FONT_SIZE = 'fontSize/SET_FONT_SIZE';

export const changeFontSize = createAction(SET_FONT_SIZE, size => size);

const initialState = 15;

const fontSize = handleActions(
  {
    [SET_FONT_SIZE]: (state, { payload: size }) => size,
  },
  initialState
);

export default fontSize;

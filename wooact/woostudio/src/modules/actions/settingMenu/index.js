import { createAction, handleActions } from 'redux-actions';

const SETTINGMENU_OPEN = 'settingmenu/SETTINGMENU_OPEN';
const SETTINGMENU_CLOSE = 'settingmenu/SETTINGMENU_CLOSE';

export const settingMenuOpen = createAction(SETTINGMENU_OPEN);
export const settingMenuClose = createAction(SETTINGMENU_CLOSE);

const initialState = {
  actvie: false,
  setStyle: {},
};

const settingMenu = handleActions(
  {
    [SETTINGMENU_OPEN]: (state, { payload: state.actvie }),
    [SETTINGMENU_CLOSE]: (state, { payload: state.actvie })
  },
  initialState
);

export default settingMenu;

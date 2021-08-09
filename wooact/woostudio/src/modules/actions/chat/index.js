import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { requestDMPost } from 'modules/fetch/api';
import moment from 'moment';

const GET_CHAT_LIST = 'chat/GET_CHAT_LIST';
const GET_CHAT_RESULT = 'chat/GET_CHAT_RESULT';

// message set
const messageArray = [];
export const chatList = createAction(GET_CHAT_LIST);

const initialState = {
  status: { type: 'success', class: 'disnone', status: '200', msg: '' },
  data: [],
};

export function* getChatList(action) {
  const paramSet = {
    domain_id: process.env.REACT_APP_DOMAIN_ID,
    in_type: action.payload.inType,
    in_str: action.payload.inStr,
    log_level: '0',
    session_id: '1',
    token: process.env.REACT_APP_TOKEN,
    parameters: {},
  };

  const setParam = {
    url: '/chat',
    param: paramSet,
  };

  try {
    const response = yield call(requestDMPost, setParam);
    const chatResult = response.data.data?.result?.fulfillment || {};
    const chatInStr = response.data.data?.in_str || '';
    const responseStatus = response.data.data?.result?.fulfillment?.response_status || '';

    const customerForm = {
      messageId: messageArray.length,
      createAt: moment().format('HH:mm'),
      messages: [{ text: chatInStr }],
      chatType: 'customer',
    };
    if (chatInStr !== '') messageArray.push(customerForm);
    // bot
    let messageForm = {};
    if (responseStatus === 'suggest') {
      messageForm = {
        messageId: messageArray.length,
        createAt: moment().format('HH:mm'),
        data: {
          response_status: chatResult.response_status,
          response_type: chatResult.response_type,
          emotion: chatResult.emotion,
          speech: chatResult.speech,
          template_id: chatResult.template_id,
          messages: [
            {
              type: 'button',
              items: chatResult.suggest.map(data => ({
                button: {
                  action: data.sentence,
                  label: data.sentence,
                  value: data.sentence,
                },
              })),
            },
          ],
          custom_code: chatResult.custom_code,
          suggest: chatResult.suggest,
        },
        chatType: 'bot',
      };
      console.log(`messageForm::: ${JSON.stringify(messageForm)}`);
    } else {
      messageForm = {
        messageId: messageArray.length,
        createAt: moment().format('HH:mm'),
        data: chatResult,
        chatType: 'bot',
      };
    }

    messageArray.push(messageForm);
    yield put({
      type: GET_CHAT_RESULT,
      payload: {
        status: response.status,
        data: messageArray || [],
      },
    });
  } catch (err) {
    const errorStatus = { type: 'error', class: '', status: '400', msg: err };
    yield put({
      type: GET_CHAT_RESULT,
      payload: { ...initialState, status: errorStatus },
      error: true,
    });
  }
}

export function* getChatListSaga() {
  yield takeLatest(GET_CHAT_LIST, getChatList);
}

export default handleActions(
  {
    [GET_CHAT_RESULT]: (state, action) => {
      // return action.payload;
      return {
        data: action.payload.data,
        status: action.payload.status,
      };
    },
  },
  initialState
);

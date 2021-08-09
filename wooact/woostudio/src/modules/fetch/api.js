import axios from 'axios';

const teanaDM = axios.create({
  baseURL: process.env.REACT_APP_DM_HOST,
});

const teanaApi = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

const statusData = { type: 'success', status: '200', msg: '' };

export const requestAutoCompleteList = async text => {
  let data = { status: statusData, data: {} };

  try {
    const res = await teanaApi.post('/api/testkdm/json_autoComplete', { domain: process.env.REACT_APP_DOMAIN_ID, area: text });

    console.log(`consoleMessage::: api::::` + JSON.stringify(res));

    data = { ...data, data: res.data.autoSentence };
  } catch (err) {
    data = { ...data, status: { ...statusData, status: '400', msg: e.message } };
  }
  return data;
};

export const requestDMPost = async req => {
  let getData = { status: statusData, data: {} };

  try {
    const resp = await teanaDM.post(req.url, req.param);
    getData = { ...getData, data: resp.data };
  } catch (e) {
    const statusSet = { ...statusData, status: '400', msg: e.message };
    getData = { ...getData, status: statusSet };
  }
  return getData;
};

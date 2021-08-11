
/**
 * User Controller
 * 사용자 정보 컨트롤러
 * */

const approot = require('app-root-path');
const configfile = require(`${approot}/.config/config.json`);
const runmode = configfile.runmode;
const config = configfile[runmode];
const axios = require('axios');

// catch routing handler function error
const doAsync = fn => async (req, res, next) => await fn(req, res, next).catch(next);

const AutoCom = doAsync(async (req, res, next) => {
  res.send({ result: 'test' });
});

module.exports = {
  AutoCom,
};

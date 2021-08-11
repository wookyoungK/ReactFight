const approot = require('app-root-path');
const express = require('express');
const path = require('path');
const router = express.Router();
const apiController = require(approot + '/server/routes/controller/api.controller');

// router.post('/dialogue', apiController.dialogue);
router.get('/AutoCom', apiController.AutoCom);

router.get('*', (req, res, next) => {
  if (req.path.split('/')[1] === 'static') return next();
  res.sendFile(approot + '/build/index.html');
});

module.exports = router;

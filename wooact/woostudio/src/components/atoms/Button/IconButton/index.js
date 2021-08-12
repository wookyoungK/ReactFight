import React from 'react';
import PropTypes from 'prop-types';
/**
 * 버튼 : 아이콘
 */
const IconButton = ({ icon, styleDef, viewStatus, clickEvt, error }) => {
  const set = '';
  return (
    <div className="_at_icon_button_div" style={styleDef}>
      {viewStatus === '_dim' ? <div className="_dim" /> : ''}
      <div className="_button_div" onClick={clickEvt}>
        <div className="_icon">
          <i className={icon} />
        </div>
      </div>
    </div>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
  styleDef: PropTypes.object,
  viewStatus: PropTypes.string,
  clickEvt: PropTypes.func,
  error: PropTypes.object,
};
IconButton.defaultProps = {
  icon: 'ri-close-fill',
  styleDef: {},
  viewStatus: '',
  clickEvt: () => {},
  error: { error: false, msg: '' },
};

export default IconButton;

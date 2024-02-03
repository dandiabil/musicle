import useOutsideAlerter from '../../lib/click-outside';
import React, { useRef } from 'react';

const ClickOutside = ({ children, onClickOutside }) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, onClickOutside);

  if (!children) {
    return null;
  }

  return <div ref={ref}>{children}</div>;
};

export default ClickOutside;

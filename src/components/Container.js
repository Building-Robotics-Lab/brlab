import React from 'react';
import './Container.css';

const Container = ({ children, useOrange, sectionName }) => {
  const parentWrapper = useOrange ? 'parent_wrapper_orange' : 'parent_wrapper';
  const contentWrapper = useOrange ? 'content_wrapper_orange' : 'content_wrapper';

  return (
    <div className={parentWrapper} id={sectionName}>
      <div id={contentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default Container;
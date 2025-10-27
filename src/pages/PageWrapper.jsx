import React from "react";

const PageWrapper = ({ children, pageName }) => {
  return (
    <div key={pageName} className={`${pageName.toLowerCase()} page-container`}>
      {children}
    </div>
  );
};

export default PageWrapper;
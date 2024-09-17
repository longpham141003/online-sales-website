import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const AdminMain = ({ children, title, ...props }) => {
  return (
    <div className="admin" {...props}>
      <LeftBar />
      <RightBar title={title}>
        {children}
      </RightBar>
    </div>
  );
};

export default AdminMain;

import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

const UserMain = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default UserMain;

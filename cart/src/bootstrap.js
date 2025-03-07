import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./components/Cart";

const mount = (el, props) => {
  const root = ReactDOM.createRoot(el);
  root.render(<Cart {...props} />);
};

export { mount };

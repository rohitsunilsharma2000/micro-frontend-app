// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Fix here
root.render(<App />);

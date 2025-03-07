import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import Button from "./components/Button";

const App = () => (
  <div>
    <h2>Remote Microfrontend</h2>
    <Button />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Fix here
root.render(<App />);

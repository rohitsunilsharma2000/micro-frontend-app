import React, { Suspense } from "react";

// Dynamically import the remote component
const RemoteButton = React.lazy(() => import("remote/Button"));

const App = () => (
  <div>
    <h1>Container App</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <RemoteButton />
    </Suspense>
  </div>
);

export default App;

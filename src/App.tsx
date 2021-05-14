// CHECKED 1.0
import React from "react";

import ErrorBoundary from "Modules/Layout/SmartComponents/ErrorBoundary/ErrorBoundary";
import Routes from "Modules/Routing/Routes/Routes";

function App() {
  return (
    <div id="app">
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  );
}

export default App;

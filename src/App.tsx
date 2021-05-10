// TODO: CHECK
import React, { useEffect } from "react";

import ErrorBoundary from "Modules/Layout/SmartComponents/ErrorBoundary/ErrorBoundary";
import Routes from "Modules/Routing/Routes/Routes";

// TODO: delete unused RouteComponentProps
function App() {
  useEffect(() => {
    console.log("app render");
  });

  return (
    <div id="app">
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  );
}

export default App;

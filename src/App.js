import React, { useState } from "react";
import "./App.css";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { Router, Link } from "@reach/router";
import ThemeContext from "./components/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
const App = () => {
  const themeHook = useState("darkBlue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div id="">
        <header>
          <Link to="/"></Link>
        </header>
        
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        
      </div>
    </ThemeContext.Provider>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));

function AppWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
}
export default AppWithErrorBoundary;
// export default App;

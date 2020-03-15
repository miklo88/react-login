import React from "react";
// other components
import Routes from "./router/Routes";
import Nav from "./components/Nav";
// import Landing from "./components/Landing";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes />
    </div>
  );
}

export default App;

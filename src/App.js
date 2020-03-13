import React from "react";
// local img, styles imports
import "./app.scss";
import photo from "./stockphotos/Patchy.jpg";
import Routes from "./router/Routes";
import Nav from "./components/Nav";
// component imports
// import Login from "./login/login";

function App() {
  return (
    <div className='App'>
      <Nav />
    
      <img className='Patchy' src={photo} alt='' />
      <p className='welcome-msg'>Bienvenidos mi gente!!</p>
      <Routes />
    </div>
  );
}

export default App;

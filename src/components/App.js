import React from 'react';
import '../assets/css/App.css';
import Home from '../pages/HomePage'
import Logo from './AnimateLogo'
import yozhik from '../assets/common/images/yozhik.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Logo /> */}
        <div className="logo" style={{
          height: "10rem",
          width: "100%",
          background: `url(${yozhik})`,
          // backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          textAlign: "center"
        }}>
          <span> Welcome to My Site </span>
        </div>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

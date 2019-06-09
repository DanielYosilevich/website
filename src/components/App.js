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
        {/* <div style = {{display:"flex", justifyContent:"center"}}> */}
        {/* <div className="logo" > */}
          {/* <img
            style={{  objectFit: 'contain' }}
            src={yozhik} */}
          {/* /> */}
          {/* <span> Welcome to My Site </span> */}
        {/* </div> */}
        {/* </div> */}
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

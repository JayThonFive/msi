// import logo from './../logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { HorizontalBar}  from "../components/horizontalBar/horizontalBar.js";
import { MenuBar } from "../components/horizontalBar/menuBar.js"

function App() {

  const [rol] = useState('admin')

  return (  

    <>
      <BrowserRouter>
        <HorizontalBar rol={rol} />
        <MenuBar rol={rol} />
      </BrowserRouter>
    </>

    // <div className="App">      
    //   <header className="App-header">
    //     <BrowserRouter>
    //       <HorizontalBar rol={rol} />
    //     </BrowserRouter>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;

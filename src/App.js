import React from 'react';
import './component/bootstrap/bootstrap.css';
import Navbar from './component/navbar/Navbar';
import AppBody from './component/appbody/AppBody';

function App() {


  return (
    <div>
      <div className="container my-3" dir="rtl">
          <h1 className="text-center mb-3 text-white">Fashion Store</h1>
          <Navbar/>
          <AppBody/>
      </div>
     
    </div>
  )
}

export default App;

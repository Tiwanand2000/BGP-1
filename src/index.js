import React from "react";
import ReactDOM from "react-dom/client";
 function App(){
  return <div>
 <Header/>
    <Menu/>
    <Footer/>
    </div>
 }

 function Pizza(){
  return <div>
    <img src="images/spinaci.jpg" alt="Spinachio"/>
  <h2>Pizza</h2>
   </div>
 }

 function Menu(){
  return <div>
    <h2>Our Menu</h2>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    </div>
 }

 function Header(){
  return <h1>Fast React Pizza.Co</h1>
 }

 function Footer(){
  return <div>
  <h4>We're currently open {new Date().toLocaleTimeString()} !! Visit soon </h4>
   </div>
 }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

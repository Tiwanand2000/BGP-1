import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>${props.price + 3}</span>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        photoName="images/spinaci.jpg"
        name="Pizza Spinachi"
        ingredient="Tomato, mozralla, spinach & ricotta cheese"
        price={10}
      />
      <Pizza
        photoName="images/funghi.jpg"
        name="Pizza Funghi"
        ingredient="Tomato, mozralla, mushrooms & ricotta cheese"
        price={15}
      />
    </main>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza.Co</h1>;
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      We're currently open {new Date().toLocaleTimeString()} !! Visit soon{" "}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

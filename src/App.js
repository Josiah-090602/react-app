import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";

function App() {
  const [name, stateName] = useState("Viernes");

  return <Header name={name} />;
}

export default App;

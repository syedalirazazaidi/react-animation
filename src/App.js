import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Feathure } from "./components/Feathure";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Feathure />
        <Card />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

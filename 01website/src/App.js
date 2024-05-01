// App.jsx

import "./App.css";
import React from "react";
import Onee from "./components/classBasedComponent/Onee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Cards from "./components/card/Cards";
import LogicCard from "./components/APIs/LogicCard";
import Business from "./components/BusinessAPI/Business";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="classBasedComponent" element={<Onee />} />
            <Route path="cards" element={<Cards />} />
            <Route path="sportnews" element={<LogicCard />} />
            <Route path="businessnews" element={<Business />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

// f1e181b620bf4df5a10ef0f294ed3357

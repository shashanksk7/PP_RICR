import React from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Qualification from "./pages/qualification";
import Hobbies from "./pages/hobbies";
import Contactme from "./pages/contactme";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main className="flex">
        <Sidebar />
        <div className="flex-grow flex justify-center items-center w-full p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="/proj" element={<Project />} />
            <Route path="/quali" element={<Qualification />} />
            <Route path="/hob" element={<Hobbies />} />
            <Route path="/cont" element={<Contactme />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}


export default App;

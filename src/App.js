import React, { useState } from "react";

import "./App.css";
// Header
import Header from "./components/Header";
// Navigation
import Navigation from "./components/Navigation";
// About || Home
import About from "./pages/About";
//
import Portfolio from "./pages/Portfolio";
//
import Contact from "./pages/Contact";
//
import Resume from "./pages/Resume";
// Footer
import Footer from "./components/Footer";

// Use conditional rendering

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };
  if (currentPage === "Resume") {
    return <Resume />;
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

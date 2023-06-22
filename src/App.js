import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Header/Navbar";
import Home from "./Home";
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./Components/Footer";
import ErrorPage from './ErrorPage'
import SingleProduct from "./SingleProduct";
import Products from "./Products";


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#000",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products/>}/>
        <Route path="/products/:id" element={<SingleProduct />}/>
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      
      <Footer/>
    
    </Router>
  </ThemeProvider>
  );
};

export default App;

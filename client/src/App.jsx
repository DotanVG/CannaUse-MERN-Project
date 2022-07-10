import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from 'react';
import AuthContextProvider from "./contexts/Auth.context";

import Header from "./components/shared/header/Header.component";
import Footer from "./components/shared/footer/Footer.component";
import HomePage from "./pages/home-page/HomePage.component";
import SignupPage from "./pages/signup-page/SignupPage.component";
import LoginPage from "./pages/login-page/LoginPage.component";
import AboutPage from "./pages/about-page/AboutPage.component";
import PageNotFound from "./pages/page-not-found/PageNotFound.component";
import MyStrainsPage from "./pages/my-strains-page/MyStrainsPage.component";
import BudTrackerPage from "./pages/budtracker-page/BudTrackerPage.component";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthContextProvider>
          <Header />

          <Routes>
            <Route path="" element={<HomePage />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="my-strains" element={<MyStrainsPage />} />
            <Route path="budtracker" element={<BudTrackerPage />} />


            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    );
  }
}

export default App;

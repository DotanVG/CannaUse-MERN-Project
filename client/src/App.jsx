import Header from "./components/shared/header/Header.component";
import Footer from "./components/shared/footer/Footer.component";
import HomePage from "./pages/home-page/HomePage.component";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./contexts/Auth.context";
import SignupPage from "./pages/signup-page/SignupPage.component";
import LoginPage from "./pages/login-page/LoginPage.component";
import PageNotFound from "./pages/page-not-found/PageNotFound.component";


function App() {
  return (
    <>
    <Header />
    <SignupPage />
    <Footer />
    </>

  
  /* APP ROUTING STRUCTURE TO BE MODIFIED

  <BrowserRouter>
    <AuthContextProvider>
      <Header />

      <Routes>
        <Route path="" element={<HomePage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />

        <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
                
    </AuthContextProvider>
  </BrowserRouter>
  */

  );
}

export default App;

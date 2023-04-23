import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SearchForm from "./Components/Search/SearchForm";
import LoggedIn from "./Components/Login/LoggedIn";
import { useEffect } from "react";
import Shipping from "./Components/Shipping/Shipping";

function App() {
  const { action } = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/homepage-wlogin":
        title = "";
        metaDescription = "";
        break;
      case "/homepage-wologin-for-prototype":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
        break;
    }
    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SearchForm />} />
      <Route path="/logged-in" element={<LoggedIn />} />
      <Route path="/shipping-details" element={<Shipping />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
export default WrappedApp;

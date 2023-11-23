import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from './pages/Menu';
import Contact from './pages/Contact'
import Header from './components/Header';
import Footer from './components/Footer';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
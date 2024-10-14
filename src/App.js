import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Register from "./page/Register";
import Blog from "./page/Blog";
import BlogList from "./page/BlogList";
import Test from "./page/Test";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./page/Contact";
import Our from "./page/Our";
import Product from "./page/Product";
import Library from "./page/Library";
import Recruitment from "./page/Recruitment";
import Footer from "./components/Footer/Footer";
import CertificateQuality from "./page/CertificateQuality";
import Introduction from "./page/Introduction";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <div className="h-screen">
          <Routes>
            <Route path="/:lang/home" element={<Home />} />
            <Route path="/:lang/our" element={<Our />}>
              {/* Nested routes for "Our" */}
              <Route path="introduction" element={<Introduction />} />
              <Route
                path="certificate-quality"
                element={<CertificateQuality />}
              />
            </Route>
            <Route path="/:lang/product" element={<Product />} />
            <Route path="/:lang/library" element={<Library />} />
            <Route path="/:lang/recruitment" element={<Recruitment />} />
            <Route path="/:lang/contact" element={<Contact />} />

            {/* <Route path="/:lang/login" element={<Login />} />
          <Route path="/:lang/register" element={<Register />} />
          <Route path="/:lang/blog" element={<Blog />} />
          <Route path="/:lang/blogList" element={<BlogList />} />
          <Route path="/:lang/test" element={<Test />} /> */}
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </Router>
      <Router>
        <Routes>
          <Route path="/helloworld" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/:lang/home" element={<Home />} />
          <Route path="/:lang/our" element={<Our />} />
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
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;

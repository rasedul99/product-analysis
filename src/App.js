import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Blogs from "./component/Blogs/Blogs";
import Dashboard from "./component/Dashboard/Dashboard";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import NotFound from "./component/NotFound/NotFound";
import Reviews from "./component/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

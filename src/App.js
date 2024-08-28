import "./Assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Aboutus from "./Pages/Aboutus/Aboutus";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import CaseStudyPage from "./Pages/CaseStudyPage/CaseStudyPage";
import WhoWeAre from "./Pages/WhoWeAre/WhoWeAre";
import Partners from "./Pages/Partners/Partners";
import WhatWeDo from "./Pages/WhatWeDo/WhatWeDo";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route name="Home Page" path="/" element={<HomePage />} exact />
        <Route
          name="About Us Page"
          path="/about-us"
          element={<Aboutus />}
          exact
        />
        <Route
          name="Contact Us Page"
          path="/talk-to-us"
          element={<ContactUsPage />}
          exact
        />
        <Route
          name="Case Study Page"
          path="/case-study"
          element={<CaseStudyPage />}
          exact
        />
        <Route
          name="Who We Are Page"
          path="/who-we-are"
          element={<WhoWeAre />}
          exact
        />
        <Route
          name="Partners Page"
          path="/partners"
          element={<Partners />}
          exact
        />
        <Route
          name="What We Do Page"
          path="/what-we-do"
          element={<WhatWeDo />}
          exact
        />
        <Route
          name="Contact Us"
          path="/talk-to-us"
          element={<ContactUsPage />}
          exact
        />
        <Route name="Error Page" path="/*" element={<ErrorPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

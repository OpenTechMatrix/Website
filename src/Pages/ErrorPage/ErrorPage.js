import React from "react";
import "./ErrorPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="errorPage">
        <h1> Error 404 </h1>
        <p>Page not found</p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;

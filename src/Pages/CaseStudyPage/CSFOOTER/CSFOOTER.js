import React, { useEffect, useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import server from "../../../config/server.json";
import "./CSFOOTER.css";
import ReCAPTCHA from "react-google-recaptcha";

const CSFOOTER = ({ currentScollPos, componentHeights }) => {
  const heigthComponent = componentHeights * 7 - 300;
  const heigthComponent1 = heigthComponent + 298;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [changeText, setChangeText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [wordCount, setWordCount] = useState(0);
  const [captchaValue, setCaptchaValue] = useState(null); //for Google recaptha
  const maxWordCount = 100; // Set your desired maximum word count here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update word count for textarea
    if (name === "message") {
      const words = value.trim().split(/\s+/);
      setWordCount(words.length);
    }
  };

  const handleSendMessage = async () => {
    setLoading(true);
    const response = await fetch(
      `${server.url.production}${server.api.SEND_EMAIL_MESSAGE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    //return response.json()
    if (response.status === 201) {
      setLoading(false);
      setChangeText(true);
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check for empty fields
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full Name is required";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    // Check word count for textarea
    if (wordCount > maxWordCount) {
      newErrors.message = `Maximum word count (${maxWordCount}) exceeded`;
    }

    // If there are errors, update state and prevent submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    handleSendMessage();
    // You can perform further actions here, like sending data to the server
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };
  // State to manage animation classes
  const [isAnimated, setIsAnimated] = useState({
    fullName: false,
    email: false,
  });

  // Function to handle input click
  const handleClick = (field) => {
    setIsAnimated({ ...isAnimated, [field]: true });
  };

  // Function to handle input blur
  const handleBlur = (field, value) => {
    if (!value) {
      setIsAnimated({ ...isAnimated, [field]: false });
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  //Gooogle Recaptha

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <section className="footer" id="getconsulation">
        <div className="wrapper">
          <div
            className={
              currentScollPos > heigthComponent
                ? "footer_container WWDFooterAnimate active"
                : "footer_container WWDFooterAnimate"
            }
          >
            <div className="footer_header">
              <span>Ready to discuss your project with us?</span>
            </div>

            <div className="form_section">
              <form onSubmit={handleSubmit}>
                <div className="input_fields">
                  <div
                    className={`input_container ${
                      isAnimated.fullName ? "animation" : ""
                    } ${errors.fullName ? "error" : ""}`}
                  >
                    <input
                      type="text"
                      className="login-input"
                      onFocus={() => handleClick("fullName")}
                      onBlur={(e) => handleBlur("fullName", e.target.value)}
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="off"
                      tabIndex={1}
                    />
                    <label htmlFor="full_name">Full Name</label>
                    {errors.fullName && (
                      <small className="error">{errors.fullName}</small>
                    )}
                  </div>

                  <div
                    className={`input_container ${
                      isAnimated.email ? "animation" : ""
                    } ${errors.email ? "error" : ""}`}
                  >
                    <input
                      type="email"
                      className="login-input"
                      onFocus={() => handleClick("email")}
                      onBlur={(e) => handleBlur("email", e.target.value)}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                      tabIndex={2}
                    />
                    <label htmlFor="email">Email</label>
                    {errors.email && (
                      <small className="error">{errors.email}</small>
                    )}
                  </div>
                  <ReCAPTCHA
                    sitekey="6Leqq4opAAAAAD2J1I-arj2PBhchVcvKj6uVah80"
                    onChange={handleCaptchaChange}
                    className="reCaptcha1"
                  />

                  <div className="button_section">
                    <div className="privacy">
                      <p>
                        By sending this form I confirm that I have read and
                        accept the <span>Privacy Policy</span>
                      </p>
                    </div>
                    <div className="submit_button">
                      <button
                        className="btn_submit"
                        type="submit"
                        disabled={!captchaValue}
                        tabIndex={4}
                      >
                        {loading
                          ? "Loading..."
                          : changeText
                          ? "Message Sent"
                          : "Send a Message"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="textarea_field">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="  Type..."
                    tabIndex={3}
                  ></textarea>

                  {errors.message && (
                    <small className="error">{errors.message}</small>
                  )}
                  <ReCAPTCHA
                    sitekey="6Leqq4opAAAAAD2J1I-arj2PBhchVcvKj6uVah80"
                    onChange={handleCaptchaChange}
                    className="reCaptcha2"
                  />
                  <div className="submit_button">
                    <div className="privacy-mob">
                      <p>
                        By sending this form I confirm that I have read and
                        accept the <span>Privacy Policy</span>
                      </p>
                    </div>
                    <button
                      className="btn_submit"
                      type="submit"
                      disabled={!captchaValue}
                    >
                      {loading
                        ? "Loading..."
                        : changeText
                        ? "Message Sent"
                        : "Send a Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer
          className={
            currentScollPos > heigthComponent1
              ? "WWDFooterAnimate active"
              : "WWDFooterAnimate"
          }
        />
      </section>
    </>
  );
};

export default CSFOOTER;



import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Box, Container, Typography } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "./App.css"; // Import CSS for animations
// import "./../../src/App.css"

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    // Simulate an API call
    setTimeout(() => {
      alert("Form submitted successfully!");
      localStorage.removeItem("formData");
      setStep(1); // Reset to step 1 after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
      });
    }, 2000); // Simulate a 2-second delay
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 formData={formData} prevStep={prevStep} submitForm={submitForm} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Box
        sx={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Multi-Step Form
        </Typography>
        <TransitionGroup>
          <CSSTransition
            key={step}
            timeout={300}
            classNames="fade"
          >
            <div>{renderStep()}</div>
          </CSSTransition>
        </TransitionGroup>
      </Box>
    </Container>
  );
}

export default App;


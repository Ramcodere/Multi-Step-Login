import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import Step1 from "";


describe("Step1 Component", () => {
  const mockSetFormData = jest.fn();
  const mockNextStep = jest.fn();
  
  it("should display validation errors when fields are empty", () => {
    render(
      <Step1
        formData={{ name: "", email: "", phone: "" }}
        setFormData={mockSetFormData}
        nextStep={mockNextStep}
      />
    );

    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Phone number is required")).toBeInTheDocument();
  });

  it("should not display validation errors when fields are filled", () => {
    render(
      <Step1
        formData={{ name: "John", email: "john@example.com", phone: "1234567890" }}
        setFormData={mockSetFormData}
        nextStep={mockNextStep}
      />
    );

    fireEvent.click(screen.getByText("Next"));
    expect(screen.queryByText("Name is required")).toBeNull();
    expect(screen.queryByText("Email is required")).toBeNull();
    expect(screen.queryByText("Phone number is required")).toBeNull();
    expect(mockNextStep).toHaveBeenCalled();
  });
});

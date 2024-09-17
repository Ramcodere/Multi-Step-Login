import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Step3 from "../Step3";

describe("Step3 Component", () => {
  const mockPrevStep = jest.fn();
  const mockSubmitForm = jest.fn();
  
  it("should display form data correctly", () => {
    const formData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address1: "123 Main St",
      address2: "Apt 4B",
      city: "Springfield",
      state: "IL",
      zip: "62704"
    };
    
    render(
      <Step3 formData={formData} prevStep={mockPrevStep} submitForm={mockSubmitForm} />
    );

    expect(screen.getByText("Name: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Email: john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Phone: 1234567890")).toBeInTheDocument();
    expect(screen.getByText("Address: 123 Main St, Apt 4B")).toBeInTheDocument();
    expect(screen.getByText("City: Springfield")).toBeInTheDocument();
    expect(screen.getByText("State: IL")).toBeInTheDocument();
    expect(screen.getByText("Zip Code: 62704")).toBeInTheDocument();
  });

  it("should call submitForm function when Submit button is clicked", () => {
    render(
      <Step3 formData={{}} prevStep={mockPrevStep} submitForm={mockSubmitForm} />
    );

    fireEvent.click(screen.getByText("Submit"));
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});

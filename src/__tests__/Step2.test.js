import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Step2 from "../Step2";

describe("Step2 Component", () => {
  const mockSetFormData = jest.fn();
  const mockNextStep = jest.fn();
  const mockPrevStep = jest.fn();
  
  it("should display validation errors when address fields are empty", () => {
    render(
      <Step2
        formData={{ address1: "", city: "", state: "", zip: "" }}
        setFormData={mockSetFormData}
        nextStep={mockNextStep}
        prevStep={mockPrevStep}
      />
    );

    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText("Address Line 1 is required")).toBeInTheDocument();
    expect(screen.getByText("City is required")).toBeInTheDocument();
    expect(screen.getByText("State is required")).toBeInTheDocument();
    expect(screen.getByText("Zip Code is required")).toBeInTheDocument();
  });

  it("should display an error for invalid ZIP code format", () => {
    render(
      <Step2
        formData={{ address1: "123 Main St", city: "Springfield", state: "IL", zip: "1234" }}
        setFormData={mockSetFormData}
        nextStep={mockNextStep}
        prevStep={mockPrevStep}
      />
    );

    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText("Invalid Zip Code format")).toBeInTheDocument();
  });

  it("should not display validation errors when fields are filled correctly", () => {
    render(
      <Step2
        formData={{ address1: "123 Main St", city: "Springfield", state: "IL", zip: "62704" }}
        setFormData={mockSetFormData}
        nextStep={mockNextStep}
        prevStep={mockPrevStep}
      />
    );

    fireEvent.click(screen.getByText("Next"));
    expect(screen.queryByText("Address Line 1 is required")).toBeNull();
    expect(screen.queryByText("City is required")).toBeNull();
    expect(screen.queryByText("State is required")).toBeNull();
    expect(screen.queryByText("Zip Code is required")).toBeNull();
    expect(screen.queryByText("Invalid Zip Code format")).toBeNull();
    expect(mockNextStep).toHaveBeenCalled();
  });
});

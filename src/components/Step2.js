

  
import React, { useState } from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";

function Step2({ formData, setFormData, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});

  // Validation function for address fields
  const validate = () => {
    let tempErrors = {};
    if (!formData.address1) tempErrors.address1 = "Address Line 1 is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.state) tempErrors.state = "State is required";
    if (!formData.zip) {
      tempErrors.zip = "Zip Code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) {
      tempErrors.zip = "Invalid Zip Code format";
    }
    return tempErrors;
  };

  const handleNext = () => {
    const tempErrors = validate();
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length === 0) {
      nextStep(); // Move to the next step if no errors
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Step 2: Address Information
      </Typography>
      <TextField
        fullWidth
        label="Address Line 1"
        variant="outlined"
        value={formData.address1}
        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
        error={!!errors.address1}
        helperText={errors.address1}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Address Line 2"
        variant="outlined"
        value={formData.address2}
        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
        margin="normal"
      />
      <TextField
        fullWidth
        label="City"
        variant="outlined"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        error={!!errors.city}
        helperText={errors.city}
        margin="normal"
      />
      <TextField
        fullWidth
        label="State"
        variant="outlined"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        error={!!errors.state}
        helperText={errors.state}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Zip Code"
        variant="outlined"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        error={!!errors.zip}
        helperText={errors.zip}
        margin="normal"
      />

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={prevStep}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Step2;

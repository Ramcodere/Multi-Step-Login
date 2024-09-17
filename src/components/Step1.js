

import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

function Step1({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    return tempErrors;
  };

  const handleNext = () => {
    const tempErrors = validate();
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length === 0) {
      nextStep(); // Move to the next step
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="https://www.guruji.life/wp-content/uploads/2022/08/Guruji-Logo-1.png"
          alt="Guruji Logo"
          style={{ width: "100px", height: "auto" }}
        />
        <Typography variant="h5" gutterBottom>
          Namaste Guruji
        </Typography>
      </Box>
      <Typography variant="h4" align="center" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            size="large"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Step1;



 

import React from "react";
import { Box, Typography, Button, Grid, List, ListItem, ListItemText } from "@mui/material";

function Step3({ formData, prevStep, submitForm }) {
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
      <Typography variant="h4" align="center" gutterBottom>
        Confirmation
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={formData.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={formData.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={formData.phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address" secondary={`${formData.address1}, ${formData.address2}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={formData.city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="State" secondary={formData.state} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zip Code" secondary={formData.zip} />
        </ListItem>
      </List>
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
            onClick={submitForm}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Step3;

import React from "react";
import jobs from "../data/data.json";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
function DetailPage() {
  const params = useParams();
  const jobID = params.id;
  const job = jobs.find((job) => job.id === jobID);
  console.log(job);
  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        No job found
      </Typography>
    );
  return (
    <Container sx={{ color: "white" }}>
      <Typography variant="h3" marginTop={3}>
        {job.title}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
        <ApartmentIcon /> {job.companyId}
      </Box>
      <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
        <LocationOnIcon /> {job.city}
      </Box>
    </Container>
  );
}

export default DetailPage;

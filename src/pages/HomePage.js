import React, { useState } from "react";
import { Container, Pagination, styled, Typography } from "@mui/material";
import jobs from "../data/data.json";
import Grid from "@mui/material/Grid";
import JobCard from "../components/JobCard";
const CentterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center",
  },
}));
const ITEMS_PER_PAGE = 5;
function HomePage() {
  const [page, setPage] = useState(1);
  const count = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedJobs = jobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Container>
      {jobs.length > 0 ? (
        <>
          <Grid container spacing={4} m={5} >
            {selectedJobs.map((job) => (
              <Grid key={job.id} size={{ xs: 12, md: 4, lg: 3 }} >
                <JobCard jobs={job} />
              </Grid>
            ))}
          </Grid>
          <CentterPagination
            size="medium"
            sx={{
              marginBottom: "15px",
              color: "white",
              variant: "outlined",
              // "& .MuiPaginationItem-root": {
              //   color: "white",
              //   bgcolor: "black",
              // },
              // "& .Mui-selected": {
              //   backgroundColor: "red",
              //   color: "white",
              // },
              // "& .Mui-selected:hover": {
              //   backgroundColor: "white",
              //   color: "black",
              // },
            }}
            count={count}
            onChange={handleChange}
            color="primary"
          />
        </>
      ) : (
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          No Result
        </Typography>
      )}
    </Container>
  );
}

export default HomePage;

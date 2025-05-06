import React, { useEffect, useState } from "react";
import { Container, Pagination, styled, Typography } from "@mui/material";
import api from "../data/fetchData";
import Grid from "@mui/material/Grid";
import JobCard from "../components/JobCard";
import { useSearchParams } from "react-router-dom";
const CentterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center",
  },
}));
function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJobs(page, q);
      setJobs(data.jobs);
      setPagesTotal(data.pagesTotal);
    };
    fetch();
  }, [page, q]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      {jobs.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid key={job.id} size={{ xs: 12, md: 4, lg: 3, sm: 6 }}>
                <JobCard
                  description={job.description}
                  title={job.title}
                  id={job.id}
                  skills={job.skills}
                />
              </Grid>
            ))}
          </Grid>
          <CentterPagination
            size="medium"
            sx={{
              marginBottom: "15px",
              color: "white",
              variant: "outlined",
              "& .MuiPaginationItem-root": {
                color: "white",
                bgcolor: "black",
              },
              // "& .Mui-selected": {
              //   backgroundColor: "red",
              //   color: "white",
              // },
              // "& .Mui-selected:hover": {
              //   backgroundColor: "white",
              //   color: "black",
              // },
            }}
            count={pagesTotal}
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

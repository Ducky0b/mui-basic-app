import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function JobCard({ jobs }) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/job/${jobs.id}`)}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#383234",
        maxWidth: "350px",
        minWidth: "270px",
        margin: "auto",
        width: "100%",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            color: "white",
            fontSize: 16,
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #ccc",
          }}
        >
          {jobs.title}
        </Typography>
        <Typography variant="h5" component="div">
          <Stack direction="row" sx={{ flexWrap: "wrap" }}>
            {jobs.skills.slice(0, 4).map((job, index) => (
              <Chip
                key={index}
                label={job}
                size="small"
                sx={{
                  bgcolor: "#df4747",
                  color: "white",
                  margin: "2px",
                  padding: "2px",
                }}
              />
            ))}
          </Stack>
        </Typography>
        <Typography sx={{ color: "white", mb: 1.5 }}>
          {jobs.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
        <Button
          variant="contained"
          size="small"
          sx={{ bgcolor: "yellow", color: "black" }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

export default function JobCard({ description, title, id, skills }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  const handleClick = () => {
    // Lưu trữ vị trí hiện tại để sau khi modal đóng có thể quay lại
    navigate(`/job/${id}`, { state: { backgroundLocation: location } });
    console.log("Click Job Card", location);
  };

  return (
    <Card
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
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          <Stack direction="row" sx={{ flexWrap: "wrap" }}>
            {skills.slice(0, 4).map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                sx={{
                  bgcolor: "#df4747",
                  color: "white",
                  margin: "2px",
                  padding: "2px",
                  fontSize: "0.6rem",
                }}
              />
            ))}
          </Stack>
        </Typography>
        <Typography sx={{ color: "white", mb: 1.5 }}>{description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
        <Button
          onClick={handleClick}
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

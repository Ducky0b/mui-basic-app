import React, { useEffect, useState, useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import api from "../data/fetchData";
import { Chip, Stack } from "@mui/material";
import AuthContext from "../auth/AuthContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 600 },
  bgcolor: "background.paper",
  borderRadius: 2,
  border: "none",
};

function JobDetailModal() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const location = useLocation();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getJob(id);
      setJob(data);
    };
    fetchData();
  }, [id]);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card
            sx={{
              border: "none",
              boxShadow: 1,
              backgroundColor: "#121212",
              color: (theme) => theme.palette.common.white,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" component="div">
                {job?.title}
              </Typography>
              <Typography>{job?.description}</Typography>
              <Stack
                direction="row"
                sx={{ flexWrap: "wrap", alignItems: "center" }}
              >
                Skills:
                {job?.skills.slice(0, 4).map((job, index) => (
                  <Chip
                    key={index}
                    label={job}
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
              <Typography variant="h6" component="div">
                City: {job?.city}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default JobDetailModal;

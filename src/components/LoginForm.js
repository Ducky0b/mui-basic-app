import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AuthContext from "../auth/AuthContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";

const style = {
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  width: "300px",
  border: "1px solid",
  padding: "10px",
  borderRadius: "5px",
};

function LoginForm({ callback }) {
  const [username] = useState("nightfury");
  const [password] = useState("123456");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const auth = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    auth.signin(username, () => {
      if (callback && typeof callback === "function") {
        callback();
      } else {
        // Nếu không có callback, trở về trang trước đó
        const from = location.state?.from?.pathname || "/";
        navigate(from, {
          state: location.state?.from?.state,
          replace: true,
        });
      }
    });
  };

  // Nếu đã đăng nhập, trở về trang trước đó
  useEffect(() => {
    if (auth.user && !callback) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, {
        state: location.state?.from?.state,
        replace: true,
      });
    }
  }, [auth.user, callback, location.state, navigate]);

  return (
    <Box sx={style} component="form" gap={4}>
      <Typography variant="h4" component="div">
        Login
      </Typography>
      <TextField
        disabled
        label="Username"
        default="user"
        value={username}
        sx={{ m: 1 }}
      />
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          disabled
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        onClick={handleLogin}
        sx={{ m: 1, width: "10ch" }}
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;

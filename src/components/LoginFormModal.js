import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm";
import { useNavigate, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: "none",
};

function LoginFormModal() {
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy thông tin về trang trước đó để quay lại sau khi đăng nhập
  const from = location.state?.from || "/";
  const backgroundLocation = location.state?.from?.state?.backgroundLocation;

  const handleClose = () => {
    navigate(-1);
  };

  // Callback sau khi đăng nhập thành công
  const handleLoginSuccess = () => {
    // Nếu có backgroundLocation, điều hướng về trang chi tiết với state chứa backgroundLocation
    if (backgroundLocation) {
      navigate(from.pathname, {
        state: { backgroundLocation: backgroundLocation },
        replace: true,
      });
      console.log(
        "handleLoginSuccess - ",
        "backgroundLocation",
        backgroundLocation,
        "from",
        from
      );
    } else {
      // Nếu không, trở về trang trước đó
      navigate(from, { replace: true });
    }
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
          <LoginForm callback={handleLoginSuccess} />
        </Box>
      </Modal>
    </div>
  );
}

export default LoginFormModal;

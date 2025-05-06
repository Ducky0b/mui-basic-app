import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";

function RequireAuth({ children, callback }) {
  const auth = useContext(AuthContext);
  const location = useLocation();
  // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
  // và lưu lại vị trí hiện tại để sau khi đăng nhập có thể quay lại
  if (!auth.user) {
    // Lưu lại backgroundLocation để có thể duy trì modal sau khi đăng nhập
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Nếu callback được cung cấp, gọi nó sau khi xác thực thành công
  // if (callback && typeof callback === "function") {
  //   callback();
  // }
  return children;
}

export default RequireAuth;

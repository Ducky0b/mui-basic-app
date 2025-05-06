import React, { useContext } from "react";
import Layout from "./pages/Layout";
import JobDetailModal from "./components/JobDetailModal";
import { Routes, Route, useLocation } from "react-router-dom";
import AuthContext from "./auth/AuthContext";
import LoginModal from "./components/LoginFormModal";
import RequireAuth from "./auth/RequiredAuth";
import "./App.css";

function App() {
  const location = useLocation();
  const auth = useContext(AuthContext);

  // Xác định nếu đang hiển thị modal hoặc không
  const backgroundLocation = location.state?.backgroundLocation;
  console.log("backgroundLocation App", backgroundLocation);
  return (
    <>
      {/* Routes chính - không hiển thị khi modal được mở */}
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginModal />} />
        </Route>

        <Route
          path="*"
          element={
            <main>
              <p style={{ color: "white" }}>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      {/* Routes cho modal - chỉ hiển thị khi có backgroundLocation */}
      {backgroundLocation && (
        <Routes>
          <Route
            path="/job/:id"
            element={
              <RequireAuth>
                <JobDetailModal />
              </RequireAuth>
            }
          />
          {/* Đảm bảo route login cũng được hiển thị như modal khi cần */}
          <Route path="/login" element={<LoginModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;

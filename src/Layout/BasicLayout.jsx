import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//pages
import HomePage from "../pages/shared/HomePage";
import ViewListingsPage from "../pages/shared/ViewListingsPage";
import LoginRegisterPage from "../pages/shared/LoginRegisterPage";
import ManagePropertyPage from "../pages/shared/ManagePropertyPage";

export default function BasicLayout() {
  const customElement = (
    Component,
    isHomePage = false,
    showLogout = false,
    showLoginRegister = true
  ) => {
    return (
      <>
        <Header
          isHomePage={isHomePage}
          showLogout={showLogout}
          showLoginRegister={showLoginRegister}
        />
        <Box sx={{ flexGrow: 1, padding: 4 }}>
          <Component />
        </Box>
      </>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={customElement(HomePage, true)} />
          <Route
            path="/rent-a-home"
            element={customElement(ViewListingsPage)}
          />
          <Route
            path="/login-register"
            element={customElement(LoginRegisterPage, false, false, false)}
          />
          <Route
            path="/manage-property"
            element={customElement(ManagePropertyPage)}
          />
          <Route path="*" element={customElement(HomePage, true)} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </Box>
  );
}

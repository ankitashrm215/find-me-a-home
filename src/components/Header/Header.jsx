import { AppBar, Box, Typography, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header({ isHomePage, showLogout, showLoginRegister }) {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Application logo */}
          <img
            src="/images/HeaderLogo.png"
            alt="Find-Me-A-Home Logo"
            style={{ width: "80px", height: "80px" }}
          />

          {/* Buttons */}
          <Button color="secondary" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="secondary" onClick={() => navigate("/rent-a-home")}>
            Rent A Home
          </Button>
          <Button
            color="secondary"
            onClick={() => navigate("/manage-property")}
          >
            Manage Property
          </Button>
        </Box>

        {/* Application name */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          {!isHomePage && (
            <Typography variant="h3" component="h3">
              Find-Me-A-Home
            </Typography>
          )}
        </Box>

        {/* Login / Register button */}
        {showLoginRegister && (
          <Button color="secondary" onClick={() => navigate("/login-register")}>
            Login / Register
          </Button>
        )}

        {/* Logout button */}
        {showLogout && (
          <Button color="secondary" onClick={() => navigate("/")}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

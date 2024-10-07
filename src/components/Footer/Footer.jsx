import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "primary.contrastText" }}
        >
          {`© Find-Me-A-Home ${new Date().getFullYear()}`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Home button */}
          <Button color="secondary" onClick={() => navigate("/")}>
            Home
          </Button>

          {/* Vertical Line */}
          <Box
            sx={{
              height: "15px",
              borderLeft: "2px solid",
              borderColor: "primary.contrastText",
            }}
          />

          {/* Contact Us button */}
          <Button
            color="secondary"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ankitasharma13",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

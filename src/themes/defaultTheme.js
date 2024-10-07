import { createTheme } from "@mui/material";

const COLOR_PALETTE = {
  BROWN: "#D4A373",
  LIGHT_BROWN: "#FAEDCD",
  OFF_WHITE: "#F0EFEB",
  GREEN: "#CCD5AE",
  LIGHT_GREEN: "#E9EDC9",
  ALERT_ERROR: "#d9534f",
  ALERT_SUCCESS: "#cfd959",
  ALERT_INFO: "#c8e7ff",
  ALERT_WARNING: "#ffe55d",
  BLACK: "#000000",
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: COLOR_PALETTE.BROWN,
      contrastText: COLOR_PALETTE.LIGHT_BROWN,
    },
    secondary: {
      main: COLOR_PALETTE.GREEN,
      contrastText: COLOR_PALETTE.LIGHT_GREEN,
    },
    background: {
      default: COLOR_PALETTE.OFF_WHITE,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem", // Custom size for h1
      fontWeight: 700, // Bold weight
    },
    h2: {
      fontSize: "1.75rem", // Custom size for h2
      fontWeight: 600,
    },
    h3: {
      fontSize: "1rem", //custom for h3
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem", // Default body text size
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "0.75rem", // Smaller font size for captions
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          //root overrides base button style
          textTransform: "none", // No uppercase text
          borderRadius: "8px", // Custom border radius
          padding: "0.5rem 1rem", // Custom padding
        },
        text: {
          color: COLOR_PALETTE.OFF_WHITE, // Text color for default button
          "&:hover": {
            color: COLOR_PALETTE.LIGHT_BROWN, // Hover effect
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        filled: {
          // Override colors for different severities
          "&.MuiAlert-filledError": {
            backgroundColor: COLOR_PALETTE.ALERT_ERROR,
            color: COLOR_PALETTE.BLACK,
          },
          "&.MuiAlert-filledSuccess": {
            backgroundColor: COLOR_PALETTE.ALERT_SUCCESS,
            color: COLOR_PALETTE.BLACK,
          },
          "&.MuiAlert-filledInfo": {
            backgroundColor: COLOR_PALETTE.ALERT_INFO,
            color: COLOR_PALETTE.BLACK,
          },
          "&.MuiAlert-filledWarning": {
            backgroundColor: COLOR_PALETTE.ALERT_WARNING,
            color: COLOR_PALETTE.BLACK,
          },
        },
      },
    },
  },
});
export default defaultTheme;

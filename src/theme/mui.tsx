import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  spacing: 8, // 1 spacing = 8px
  palette: {
    primary: {
      main: "#000",
      dark: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2, 3),
          [theme.breakpoints.down("sm")]: {
            minHeight: theme.spacing(6),
          },
          [theme.breakpoints.up("sm")]: {
            minHeight: theme.spacing(7),
          },
        }),
        textPrimary: {
          backgroundColor: "#000",
          color: "#fff",
          ":hover": {
            backgroundColor: "#000",
          },
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
        textSecondary: {
          backgroundColor: "#fff",
          color: "#000",
          ":hover": {
            backgroundColor: "#fff",
          },
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: theme.spacing(5),
        }),
        colorPrimary: {
          backgroundColor: "#000",
          color: "#fff",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          ":hover": {
            backgroundColor: "#000",
          },
        },
        colorSecondary: {
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          ":hover": {
            backgroundColor: "#fff",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({}),
        colorSecondary: ({ theme }) => ({
          color: "#000",
          backgroundColor: theme.palette.grey[200],
          borderRadius: theme.spacing(1),
        }),
      },
    },
  },
});

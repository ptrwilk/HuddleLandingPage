import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import LandingPage from "./Components/LandingPage";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;

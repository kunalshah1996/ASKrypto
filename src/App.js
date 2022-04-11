import Container from '@mui/material/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import useStyles from './styles';
import Learn from './Components/Learn/Learn';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Market from './Components/Market/Market';


const App = () => {
  const themeLight = createTheme({
    palette: {
      background: {
        default: "#2a2e30"
      }
    }
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#2a2e30" },
        }}
      />
      <BrowserRouter>
        <Navbar />
        <Container className={classes.app}>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/learn" element={<Learn></Learn>} />
            <Route path="/market" element={<Market></Market>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

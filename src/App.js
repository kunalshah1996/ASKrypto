import React, { useEffect } from 'react';
import Container from '@mui/material/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import useStyles from './styles';
import Learn from './Components/Learn/Learn';
import Learn1 from './Components/Learn/Learn1';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Market from './Components/Market/Market';
import InvestmentPortfolio from './Components/InvestmentPortfolio/InvestmentPortfolio';
import TrustCircle from './Components/TrustCircle/TrustCircle'
import Chat from './Components/Chat/Chat';
import BtcCircle from './Components/BtcCircle/BtcCircle'
import Messenger from './Components/Messenger/Messenger'
import About from './Components/About/About'


const App = () => {

  const themeLight = createTheme({
    palette: {
      background: {
        default: "#2a2e30"
      }
    }
  });
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "ASKRYPTO";
  });
  return (

    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#2a2e30", color: "#FFFFFF" },
        }}
      />
      <BrowserRouter>
        <Navbar />
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            marginTop: '90px',
          }}
        >
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/learn" element={<Learn1></Learn1>} />
            <Route path="/market" element={<Market></Market>} />
            <Route path="/investmentportfolio" element={<InvestmentPortfolio></InvestmentPortfolio>} />
            <Route path="/trustcircle" element={<TrustCircle></TrustCircle>} />
            <Route path="/chat" element={<Chat></Chat>} />
            <Route path="/btccircle" element={<BtcCircle></BtcCircle>} />
            <Route path="/messenger" element={<Messenger></Messenger>} />
            <Route path="/about" element={<About></About>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

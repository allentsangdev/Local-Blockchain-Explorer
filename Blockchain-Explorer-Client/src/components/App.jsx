import './App.css';
import Transfer from './Transfer';
import Transaction from './Transaction';
import Addresses from './Addresses';
import Home from './Home';
import Wallet from './Wallet';
import Navbar from './Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// Dark Mode and Light Mode Material UI theme setting
const darkThemeMode = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightThemeMode = createTheme({
  palette: {
    mode: 'light',
  },
});

// Rendering App Component
function App() {  
  const [darkTheme, setTheme] = useState(true)
  const switchTheme = (_theme) => setTheme(_theme)
  const theme = darkTheme ? darkThemeMode : lightThemeMode

  return (
    
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <Navbar switchTheme={switchTheme} currentTheme={theme}/>          
        </div>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/wallet" element={<Wallet/>} exact/>
          <Route path="/addresses" element={<Addresses currentTheme={theme}/>} exact/>
          <Route path="/transaction-history" element={<Transaction />} exact/>
          <Route path="/transfer/:address" element={<Transfer/>} exact/>
        </Routes>
      
      
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
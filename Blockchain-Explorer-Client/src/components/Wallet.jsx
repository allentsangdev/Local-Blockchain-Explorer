import * as React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Alert from '@mui/material/Alert';


export default function Wallet() {

  //const apiUri = 'https://blockchain-explorer-api-z0rh.onrender.com/account/balance/0x6dC70bEa16f1ef94A7350989ca5413a2E180860f'
  const [walletData, setWalletData] = useState(null)
  // component did mount hook to fetch the first node addresses from api. This address will be the default address for the wallet
  useEffect(() => {
    axios.get('http://localhost:4000/account/addresses').then(response => {
      const nodeAddress = response.data[0]
      const apiUri = `http://localhost:4000/account/balance/${nodeAddress}`
      axios.get(apiUri).then(response => {
        setWalletData(response.data)
        console.log(response.data)
      })
    }).catch(error => {
      console.error(error)
    })
  }, [])
  
  return (
    <>
      <Alert severity="info">Note that this wallet using the first accounnt from your local blockchain node as default account</Alert>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <AccountBalanceWalletIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              My Wallet
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {walletData && <Typography component="p" variant="p"> Address: {walletData.account} </Typography>}
                </Grid>
                <Grid item xs={12}>
                  {walletData && <Typography component="p" variant="p"> Balance: {walletData.balance} </Typography>}
                </Grid>
              </Grid>
              
              <Grid container justifyContent="flex-end">
                <Grid item>
                </Grid>
              </Grid>
            </Box>
        </Box>
      </Container>
    </>
    
  );
}

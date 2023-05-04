import * as React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HistoryIcon from '@mui/icons-material/History';

export default function Transaction() {
  
  //const apiUri = 'https://blockchain-explorer-api-z0rh.onrender.com/account/history'
  const apiUri = 'http://localhost:4000/account/history'
  const [transactionHistoryData, setTransactionHistoryData] = useState(null)

  // component did mount hook to fetch data from api 
  useEffect(() => {
    axios.get(apiUri).then(response => {
      setTransactionHistoryData(response.data)
      console.log(transactionHistoryData)
    })
  }, [])

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: 'success.light' }}>
            <HistoryIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Transaction History
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
          {transactionHistoryData && <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography component="p" variant="p"> Transaction Hash: {transactionHistoryData[0].transactionHash} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Status: {transactionHistoryData[0].status} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Timestamp: {transactionHistoryData[0].timeStamp} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Form: {transactionHistoryData[0].from} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> To: {transactionHistoryData[0].to} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Value: {transactionHistoryData[0].value}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Gas Used: {transactionHistoryData[0].gasUsed}</Typography>
              </Grid>
            </Grid>}
            
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

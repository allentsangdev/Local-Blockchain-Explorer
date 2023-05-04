import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Avatar from '@mui/material/Avatar';

function Receipt(props) {
    return (
        
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <Box sx={{ marginTop: 4, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                        <Avatar sx={{ m: 1, bgcolor: 'warning.light' }}>
                            <ReceiptLongIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Receipt
                        </Typography>
                        
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> Transaction Hash: {props.mockData.transactionHash} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> Block Hash: {props.mockData.blockHash} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> Block Number: {props.mockData.blockNumber} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> From: {props.mockData.from} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> To: {props.mockData.to} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> Gas Used: {props.mockData.gasUsed}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    
                    </Box>
            </Container>
        
    )
}

export default Receipt
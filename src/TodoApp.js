import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import BasicCard from './Card';
export default function SimpleContainer() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" style={{display:"flex", 
        justifyContent:"center",alignItems:"center", height: '100vh'  }}>
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
            <BasicCard />
        </Container>
        </React.Fragment>
    );
}
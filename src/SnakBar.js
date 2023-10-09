    import * as React from 'react';
    import Stack from '@mui/material/Stack';
    import Snackbar from '@mui/material/Snackbar';
    import MuiAlert from '@mui/material/Alert';

    const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    export default function CustomizedSnackbars ({open,msg}) {

        let mE = (msg === "successfuly you added massege" 
        ? <Alert  severity="success" sx={{ width: '100%' }}>{msg}</Alert>
        : msg = " msg is deleted okey "
        ?<Alert severity="error">{msg}</Alert>
        :<Alert severity="info">{msg}</Alert> )

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000}>
            {
                mE
            }
        </Snackbar>
        {/* <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert> */}
        </Stack>
    );
    }
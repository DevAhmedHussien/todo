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
        : msg === " msg is deleted okey "
        ?<Alert severity="error">{msg}</Alert>
        : msg === "in progress "?
         <Alert severity="info">{msg}</Alert>
        : msg === "done " 
        ?<Alert severity="info">{msg}</Alert>
        :<Alert severity="info">{msg}</Alert>

          )

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000}>
            {
                mE
            }
        </Snackbar>
        </Stack>
    );
    }
import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

function RecoverPassword() {
    return (
        <div className="mt-[40px] flex items-center justify-center">
            <Box>
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>
                    Reset your password
                </Typography>
                <Typography sx={{ textAlign: 'center', fontSize: '16px' }}>
                    We will send you an email to reset your password
                </Typography>

                <Box>
                    <TextField
                        id="outlined-basic-email"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter your Email..."
                        sx={{ width: 400, mb: 2, mt: 2 }}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 4,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#5b7b5e',
                            p: '8px 24px',
                            '&:hover': {
                                backgroundColor: '#5b7b5e',
                            },
                        }}
                    >
                        Submit
                    </Button>
                </Box>
                <Typography
                    sx={{
                        fontSize: '16px',
                        textDecoration: 'underline',
                        color: '#a7bda0',
                        textAlign: 'center',
                        mt: 2,
                        '&:hover': {
                            color: '#5b7b5e',
                            cursor: 'pointer',
                        },
                    }}
                    onClick={() => window.history.back()}
                >
                    Cancel
                </Typography>
            </Box>
        </div>
    );
}

export default RecoverPassword;

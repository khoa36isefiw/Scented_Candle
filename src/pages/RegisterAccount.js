import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

function RegisterAccount() {
    return (
        <div className="mt-[40px] flex items-center justify-center">
            <Box>
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>
                    Create Account{' '}
                </Typography>
                <Box>
                    <TextField
                        id="outlined-basic-FirstName"
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter your First Name..."
                        sx={{ width: 400, mb: 2, mt: 2 }}
                    />
                </Box>
                <Box>
                    <TextField
                        id="outlined-basic-LastName"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter your Last Name..."
                        sx={{ width: 400, mb: 2, mt: 2 }}
                    />
                </Box>
                <Box>
                    <TextField
                        id="outlined-basic-email"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter your Email..."
                        sx={{ width: 400, mb: 2, mt: 2 }}
                    />
                </Box>
                <Box>
                    <TextField
                        id="outlined-basic-password"
                        placeholder="Enter your Password..."
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{ width: 400, mt: 2 }}
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
                        Create
                    </Button>
                </Box>
            </Box>
        </div>
    );
}

export default RegisterAccount;

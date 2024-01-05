import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const navigate = useNavigate();
    return (
        <div className="mt-[40px] flex items-center justify-center">
            <Box>
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>
                    Login{' '}
                </Typography>
                <Box>
                    <TextField
                        id="outlined-basic-email"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter your email..."
                        sx={{ width: 400, mb: 2, mt: 2 }}
                    />
                </Box>
                <Box>
                    <TextField
                        id="outlined-basic-password"
                        placeholder="Enter your password..."
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{ width: 400, mt: 2 }}
                    />
                </Box>

                <Typography
                    sx={{
                        fontSize: '16px',
                        textDecoration: 'underline',
                        color: '#a7bda0',
                        mt: 2,
                        '&:hover': {
                            color: '#5b7b5e',
                            cursor: 'pointer',
                        },
                    }}
                    onClick={() => navigate('/account/recover')}
                >
                    Forgot password?
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 2,
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
                        Login
                    </Button>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            textDecoration: 'underline',
                            color: '#a7bda0',
                            mt: 2,
                            '&:hover': {
                                color: '#5b7b5e',
                                cursor: 'pointer',
                            },
                        }}
                        onClick={() => navigate('/account/register')}
                    >
                        Create account
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}

export default LoginPage;

import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import { CodeSandboxOutlined, DollarOutlined, SubnodeOutlined, IdcardOutlined } from '@ant-design/icons';
const Idealogy = () => {
    return (
        <Container className="idealogy-section">
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} lg={7}>
                    <Box
                        style={{
                            marginBottom: '30px'
                        }}
                    >
                        <h1 style={{ fontSize: '14px', marginBottom: '10px', color: '#403ab4' }}>THE CORES & VALUES</h1>
                        <h1 style={{ fontSize: '36px', marginBottom: '15px', fontWeight: '600' }}>
                            Our idealogy to craft digital products that make presence
                        </h1>
                        <p style={{ fontSize: '15px', color: '#555', marginBottom: '15px' }}>
                            Veniam quis nostrud exercitation ullamco laboris aliquip ex ea duis aute irure dolor kin reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non quis nostrud
                            exercitation ullamco.
                        </p>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6} lg={6}>
                            <Box>
                                <CodeSandboxOutlined
                                    style={{
                                        fontSize: '50px',
                                        marginBottom: '15px'
                                    }}
                                />
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '5px'
                                    }}
                                >
                                    Vision & Mission
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: '#555'
                                    }}
                                >
                                    Contetur adipisicing elit, sed do eiusm tempor incididu laboret dolore.
                                </p>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            <Box>
                                <DollarOutlined
                                    style={{
                                        fontSize: '50px',
                                        marginBottom: '15px'
                                    }}
                                />
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '5px'
                                    }}
                                >
                                    Trending Items
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: '#555'
                                    }}
                                >
                                    Contetur adipisicing elit, sed do eiusm tempor incididu laboret dolore
                                </p>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            <Box>
                                <SubnodeOutlined
                                    style={{
                                        fontSize: '50px',
                                        marginBottom: '15px'
                                    }}
                                />
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '5px'
                                    }}
                                >
                                    Empower Startup
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: '#555'
                                    }}
                                >
                                    Contetur adipisicing elit, sed do eiusm tempor incididu laboret dolore.
                                </p>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            <Box>
                                <IdcardOutlined
                                    style={{
                                        fontSize: '50px',
                                        marginBottom: '15px'
                                    }}
                                />
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '5px'
                                    }}
                                >
                                    Working Strategies
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: '#555'
                                    }}
                                >
                                    Contetur adipisicing elit, sed do eiusm tempor incididu laboret dolore.
                                </p>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Box>
                        <img
                            src="https://20093980.fs1.hubspotusercontent-na1.net/hubfs/20093980/raw_assets/public/saasweb/images/resource/feature-1.png"
                            alt=""
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Idealogy;

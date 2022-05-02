import { React, useState } from 'react'
import { Button, Stack, Drawer, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchBar from "material-ui-search-bar";
import { styled } from '@mui/material/styles';

const InvestmentPortfolio = () => {
    const data = {
        "balances": [
            {
                "symbol": "BTC",
                "amount": "109.42",
                "holds": "2"
            },
            {
                "symbol": "ETH",
                "amount": "109.42",
                "holds": "2"
            },
            {
                "symbol": "MATIC",
                "amount": "109.42",
                "holds": "2"
            },
            {
                "symbol": "AAVE",
                "amount": "109.42",
                "holds": "2"
            }
        ],
        "type": "TRADING_BALANCES",
        "trading_balances": {
            "total": "string",
            "holds": "string"
        },
        "vault_balances": {
            "total": "12408.389",
            "holds": "string"
        }
    };
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });

    const [rows, setRows] = useState(data.balances);
    const [searched, setSearched] = useState("");

    const requestSearch = (searchedVal) => {
        const filteredRows = data.balances.filter((row) => {
            return row.symbol.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    const drawerWidth = 350;
    return (
        <Container disableGutters maxWidth='disable'>
            <Container disableGutters maxWidth='disable' sx={{
                borderTop: '0.1em solid white',
                borderBottom: '0.1em solid white'
            }}
            >
                <Typography variant='h4' color='common.white' padding={'20px'}>INVESTMENT PORTFOLIO</Typography>
            </Container>
            <Container>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            backgroundColor: '#2a2e30',
                            border: '0.01em solid white'
                        },
                    }}
                    PaperProps={{ style: { marginTop: '24.5vh' } }}
                    variant="permanent"
                    anchor="left"
                >

                    <Typography variant='h6' color='common.white' paddingTop={2} paddingLeft={2}>Total Holdings: {1000}</Typography>
                    <Typography variant='h6' color='common.white' paddingTop={2} paddingLeft={2}>Available Balance: {1000}</Typography>
                    <Typography variant='h6' color='common.white' paddingTop={2} paddingLeft={2}>On Order: {1000}</Typography>
                    <Stack spacing={2} direction="row" marginTop='100px' marginLeft='80px'>
                        <BootstrapButton variant="contained" disableRipple>
                            Settings
                        </BootstrapButton>
                        <BootstrapButton variant="contained" disableRipple>
                            Help
                        </BootstrapButton>
                    </Stack>
                </Drawer>

                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: window.innerWidth - drawerWidth,
                            backgroundColor: '#2a2e30',
                            border: '0.01em solid white'
                        },
                    }}
                    PaperProps={{ style: { marginTop: '24.5vh' } }}
                    variant="permanent"
                    anchor="right"
                    borderColor="red"
                    borderRight={1}
                >
                    <Container>
                        <Container>
                            <SearchBar
                                style={{ width: '400px', marginTop: '20px' }}
                                value={searched}
                                onChange={(searchVal) => requestSearch(searchVal)}
                                onCancelSearch={() => cancelSearch()}
                            />

                        </Container>
                        <TableContainer>
                            <Table aria-label="simple table">

                                <TableBody >
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row" style={{ color: 'white' }} >
                                                {row.symbol}
                                            </TableCell>
                                            <TableCell align="right" style={{ color: 'white', verticalAlign: 'top' }}>
                                                <Typography fontSize={14}>{row.holds}</Typography>
                                                <Typography fontSize={14}>$ {row.amount}</Typography>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>

                </Drawer>
            </Container>
        </Container>
    );
}

export default InvestmentPortfolio
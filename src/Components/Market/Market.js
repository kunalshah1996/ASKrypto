import { React, useState, useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, Box, Drawer, Typography, Grid, Avatar } from '@mui/material';
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import SearchBar from 'material-ui-search-bar';
import IconButton from "@mui/material/IconButton";
import TradeViewChart from 'react-crypto-chart';

const Market = () => {
    const drawerWidth = 240;
    const [coins, setCoins] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState("");
    const [selectedPair, setSelectedPair] = useState("");
    const [favClicked, setFavClicked] = useState(false);

    const getData = async () => {
        try {
            const res = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            );
            setCoins(res.data);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getData();

    }, [selectedCoin]);

    useEffect(() => {
        setSelectedPair(`${selectedCoin.toUpperCase()}USDT`);
        setChildKey(prev => prev + 1);

    }, [selectedCoin, selectedPair]);

    const starClick = (e, text) => {
        e.preventDefault();
        e.stopPropagation();
        setFavClicked(!favClicked);
        if (favourites.includes(text.toUpperCase())) {
            setFavourites(favourites.filter(item => item !== text.toUpperCase()))
        }
        else {
            setFavourites([...favourites, text.toUpperCase()]);
        }

    }
    const selectCoin = (e, symbol) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedCoin(symbol);
        setSelectedPair("");
        setFavClicked(false);

    }

    const removeFav = (e, fav) => {
        e.preventDefault();
        e.stopPropagation();
        setFavourites(favourites.filter(item => item !== fav.toUpperCase()))
    };

    const [childKey, setChildKey] = useState(1);

    return (

        <Box sx={{ display: 'flex' }} style={{ backgroundColor: '#2a2e30' }}>
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
                PaperProps={{ style: { marginTop: '13vh' } }}
                variant="permanent"
                anchor="left"
            >
                <Typography variant='h4' style={{ paddingLeft: "20px" }} color="common.white">Market</Typography>
                <Divider sx={{ bgcolor: "common.white" }} />

                <SearchBar
                    placeholder="Search Coin"
                    style={{ height: "30px", marginBottom: "5px", marginTop: "5px", maxWidth: "200px", marginLeft: "20px" }}
                />

                <Divider sx={{ bgcolor: "common.white" }} />
                <Typography variant='h6' style={{ paddingLeft: "10px", paddingTop: "10px" }} color="common.white">Favourites</Typography>
                <List style={{ overflow: 'auto', minHeight: "20%", }} sx={{
                    "&::-webkit-scrollbar": {
                        width: 10
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#2a2e30"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "white",
                        borderRadius: 2
                    }
                }}>
                    {favourites.map((fav, index) => (
                        <ListItem button key={fav} style={{ color: "white" }} >
                            <Avatar sx={{ width: 20, height: 20 }} alt="C" src={coins.find(x => x.symbol === fav.toLowerCase()).image} />
                            <ListItemText primary={fav} sx={{ paddingLeft: '10px' }}></ListItemText>
                            <IconButton aria-label="star" onClick={(e) => { removeFav(e, fav) }}>
                                <StarIcon style={{ color: 'gold', fontSize: 15 }} />
                            </IconButton>
                        </ListItem>
                    ))}

                </List>
                <Divider sx={{ bgcolor: "common.white" }} />
                <Typography variant='h6' style={{ paddingLeft: "10px", paddingTop: "10px" }} color="common.white">Market</Typography>
                <List style={{ overflow: 'auto' }} sx={{
                    "&::-webkit-scrollbar": {
                        width: 10
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#2a2e30"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "white",
                        borderRadius: 2
                    }
                }}>
                    {coins.map(({ symbol }, index) => (
                        <ListItem button key={symbol} style={{ color: "white" }} >
                            <Avatar sx={{ width: 20, height: 20 }} alt="C" src={coins.find(x => x.symbol === symbol.toLowerCase()).image} />
                            <ListItemText sx={{ paddingLeft: '10px' }} primary={symbol.toUpperCase()} onClick={(e) => { selectCoin(e, symbol) }} />
                        </ListItem>
                    ))}
                </List>


            </Drawer>
            {selectedCoin ?
                <div>
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
                        PaperProps={{ style: { marginTop: '13vh' } }}
                        variant="permanent"
                        anchor="right"
                        borderColor="red"
                        borderRight={1}
                    >
                        <div style={{ backgroundColor: '#2a2e30' }}>
                            {selectedCoin ?
                                <Grid container justify="space-between" style={{ backgroundColor: '#2a2e30' }}>
                                    <Avatar sx={{ width: 40, height: 40, marginLeft: '10px', marginTop: '20px' }} alt="C" src={coins.find(x => x.symbol === selectedCoin).image} />
                                    <Typography variant='h4' inline align='left' color="common.white" style={{ padding: "20px" }} >{selectedCoin.toUpperCase()}</Typography>
                                    <IconButton aria-label="star" onClick={(e) => {
                                        starClick(e, selectedCoin);
                                    }} >
                                        {favourites.includes(selectedCoin.toUpperCase()) ? <StarIcon style={{ color: 'gold', fontSize: 40 }} /> : <StarIcon style={{ color: 'white', fontSize: 40 }} />}
                                    </IconButton>
                                    <Typography variant='h5' inline align='right' color="common.white" style={{ padding: "25px", marginLeft: "550px" }}>$ {(coins.find(x => x.symbol === selectedCoin).current_price)}</Typography>
                                    {(coins.find(x => x.symbol === selectedCoin).price_change_percentage_24h) > 0 ?
                                        <box style={{ minWidth: "70px", maxWidth: "70px", minHeight: "30px", maxHeight: "30px", marginTop: "25px", backgroundColor: "green" }} >
                                            <Typography variant='body1' inline color="common.white" style={{ paddingLeft: "10px", paddingTop: "3px" }}>{(coins.find(x => x.symbol === selectedCoin).price_change_percentage_24h).toFixed(2)} %</Typography>
                                        </box>
                                        :
                                        <box style={{ minWidth: "70px", maxWidth: "70px", minHeight: "30px", maxHeight: "30px", marginTop: "25px", backgroundColor: "red" }} >
                                            <Typography variant='body1' inline color="common.white" style={{ paddingLeft: "10px", paddingTop: "3px" }}>{(coins.find(x => x.symbol === selectedCoin).price_change_percentage_24h).toFixed(2)} %</Typography>
                                        </box>
                                    }
                                </Grid>
                                :
                                <Grid></Grid>
                            }
                            <div key={childKey}>
                                <TradeViewChart
                                    containerStyle={{
                                        minHeight: '400px',
                                        maxHeight: '400px',
                                        minWidth: '200px',
                                        maxWidth: '1100px',
                                        marginTop: '0px',
                                    }}
                                    pair={selectedPair}
                                />
                            </div>
                            < Divider sx={{ bgcolor: "common.white", marginBottom: "10px" }} />
                            <container sx={{ marginTop: "20px" }}>
                                <Typography variant='h5' color="common.white">Data</Typography>
                                <Grid container sx={{ marginTop: "10px" }}>
                                    <Typography variant='h6' color="common.white" marginLeft={"10px"}>All time high : &nbsp;</Typography>
                                    <Typography variant='h6' color="common.white" > {(coins.find(x => x.symbol === selectedCoin).ath).toFixed(2)}</Typography>
                                    <Typography variant='h6' color="common.white" marginLeft={"auto"}>24 hour high: &nbsp; </Typography>
                                    <Typography variant='h6' color="common.white" >{(coins.find(x => x.symbol === selectedCoin).high_24h).toFixed(2)}</Typography>
                                    <Typography variant='h6' color="common.white" marginLeft={"auto"}>24 hour low: &nbsp; </Typography>
                                    <Typography variant='h6' color="common.white" marginRight={"10px"}  >{(coins.find(x => x.symbol === selectedCoin).low_24h).toFixed(2)} </Typography>
                                </Grid>
                                <Grid container justify="space-between">
                                    <Typography variant='h6' color="common.white" marginLeft={"10px"}>Market Cap: &nbsp; </Typography>
                                    <Typography variant='h6' color="common.white" > {(coins.find(x => x.symbol === selectedCoin).market_cap).toFixed(2)}</Typography>
                                    <Typography variant='h6' color="common.white" marginLeft={"auto"} > Total Supply: &nbsp; </Typography>
                                    <Typography variant='h6' color="common.white" >  {(coins.find(x => x.symbol === selectedCoin)?.total_supply)}</Typography>
                                    <Typography variant='h6' color="common.white" marginLeft={"auto"} > Circulating Supply: &nbsp; </Typography>
                                    <Typography variant='h6' color="common.white" marginRight={"10px"} > {(coins.find(x => x.symbol === selectedCoin).circulating_supply).toFixed(2)}</Typography>
                                </Grid>
                            </container>


                        </div>
                    </Drawer >
                </div>
                :
                <div></div>};

        </Box >
    );
}

export default Market
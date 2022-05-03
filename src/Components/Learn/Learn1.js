import { React, useState } from 'react';
import { Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, Box, Drawer, Typography, CssBaseline, ListItemButton, Collapse, CircularProgress, Container, Grid, Checkbox, ThemeProvider, createTheme, GlobalStyles, TextField, Autocomplete, InputAdornment } from '@mui/material';
import { ExpandLess, StarBorder, ExpandMore, } from '@mui/icons-material';
import SearchBar from 'material-ui-search-bar';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Try from './try.json'

const Learn1 = () => {

    const [data] = useState(Try.sections);
    const [searchData] = useState(Try.data)
    const [displayData, setDisplayData] = useState("");
    const [displayHeading, setDisplayHeading] = useState("");
    const [section, setSection] = useState("");
    const drawerWidth = 240;
    const [section2, setSection2] = useState(false);
    const [section1, setSection1] = useState(false);
    const [section3, setSection3] = useState(false);
    const [section4, setSection4] = useState(false);
    const [section5, setSection5] = useState(false);
    const [searchedData, setSearchedData] = useState([]);
    const [searchFile, setSearchFile] = useState("")


    const handleSection1 = () => {
        setSection1(!section1);

    };
    const handleSection2 = () => {
        setSection2(!section2);

    };

    const handleSection3 = () => {
        setSection3(!section3);

    };

    const handleSection4 = () => {
        setSection4(!section4);

    };
    const handleSection5 = () => {
        setSection5(!section5);

    };
    const handleSearch = (e) => {
        console.log("e", e);
        console.log("Data:", searchData);
        const filteredData = searchData.filter((row) => {
            return Object.keys(row)[0].toLowerCase().includes(e.toLowerCase());
        })
        setSearchedData(filteredData)
        //console.log("search data final:", searchedData);
        console.log("answer:", Object.entries(searchedData[0])[0][1]);
    };



    const cancelSearch = () => {
        setSearchedData([]);
        handleSearch(searchedData);
    };

    return (
        <Container disableGutters maxWidth="disable" marginTop={1}>
            <Grid container directon={'row'} overflow='auto' marginTop={1}>
                <Grid marginTop={0.5} item sx={{
                    width: drawerWidth,
                    minHeight: "87vh"
                }}
                    style={{ border: "1px solid white" }}
                    overflow='auto'
                >
                    <Typography variant='h4' style={{ paddingLeft: "20px" }} color="common.white">Learn</Typography>
                    <Divider sx={{ bgcolor: "common.white" }} />

                    <SearchBar
                        placeholder="Search"
                        style={{ height: "30px", marginBottom: "5px", marginTop: "5px", maxWidth: "200px", marginLeft: "20px" }}
                        //onChange={(searchVal) => handleSearch(searchVal)}
                        onCancelSearch={() => cancelSearch()}
                        onRequestSearch={(searchVal) => handleSearch(searchVal)}
                    />

                    <Divider sx={{ bgcolor: "common.white" }} />

                    <List
                        sx={{ width: '100%', maxWidth: 240, backgroundColor: '#2a2e30' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleSection1} style={{ color: "white" }}>
                            <ListItemText primary="Section 1" style={{ color: "white" }} />
                            <CircularProgress variant="determinate" value={100} size="25px" style={{ marginRight: "10px" }} />
                            {section1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={section1} timeout="auto" unmountOnExit>

                            <List component="div" disablePadding>
                                {data[0].section1.map((parts, index) => (
                                    <ListItem>
                                        <ListItemButton sx={{ pl: 4 }} onClick={() => { setDisplayData(Object.values(parts)); setDisplayHeading(Object.keys(parts)); setSection("Section 1: "); }}>
                                            <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                sx={{
                                                    color: "white",
                                                    '&.Mui-checked': {
                                                        color: "green",
                                                    },
                                                }}

                                            />
                                            <ListItemText style={{ color: "white" }}>{Object.keys(parts)}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>

                                ))}
                            </List>


                        </Collapse>
                        <ListItemButton onClick={handleSection2} style={{ color: "white" }}>
                            <ListItemText primary="Section 2" style={{ color: "white" }} />
                            <CircularProgress variant="determinate" value={95} size="25px" style={{ marginRight: "10px" }} />
                            {section2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={section2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {data[1].section2.map((parts, index) => (
                                    <ListItem>
                                        <ListItemButton sx={{ pl: 4 }} onClick={() => { setDisplayData(Object.values(parts)); setDisplayHeading(Object.keys(parts)); setSection("Section 2: "); }}>
                                            <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                sx={{
                                                    color: "white",
                                                    '&.Mui-checked': {
                                                        color: "green",
                                                    },
                                                }}

                                            />
                                            <ListItemText style={{ color: "white" }}>{Object.keys(parts)}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleSection3} style={{ color: "white" }}>

                            <ListItemText primary="Section 3" style={{ color: "white" }} />
                            <CircularProgress variant="determinate" value={50} size="25px" style={{ marginRight: "10px" }} />
                            {section3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={section3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {data[2].section3.map((parts, index) => (
                                    <ListItem>
                                        <ListItemButton sx={{ pl: 4 }} onClick={() => { setDisplayData(Object.values(parts)); setDisplayHeading(Object.keys(parts)); setSection("Section 3: "); }}>
                                            <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                sx={{
                                                    color: "white",
                                                    '&.Mui-checked': {
                                                        color: "green",
                                                    },
                                                }}

                                            />
                                            <ListItemText style={{ color: "white" }}>{Object.keys(parts)}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleSection4} style={{ color: "white" }}>

                            <ListItemText primary="Section 4" style={{ color: "white" }} />
                            <CircularProgress variant="determinate" value={30} size="25px" style={{ marginRight: "10px" }} />
                            {section4 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={section4} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {data[3].section4.map((parts, index) => (
                                    <ListItem>
                                        <ListItemButton sx={{ pl: 4 }} onClick={() => { setDisplayData(Object.values(parts)); setDisplayHeading(Object.keys(parts)); setSection("Section 4: "); }}>
                                            <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                sx={{
                                                    color: "white",
                                                    '&.Mui-checked': {
                                                        color: "green",
                                                    },
                                                }}

                                            />
                                            <ListItemText style={{ color: "white" }}>{Object.keys(parts)}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleSection5} style={{ color: "white" }}>
                            <ListItemText primary="Section 5" style={{ color: "white" }} />
                            <CircularProgress variant="determinate" value={20} size="25px" style={{ marginRight: "10px" }} />
                            {section5 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={section5} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {data[4].section5.map((parts, index) => (
                                    <ListItem>
                                        <ListItemButton sx={{ pl: 4 }} onClick={() => { setDisplayData(Object.values(parts)); setDisplayHeading(Object.keys(parts)); setSection("Section 5: "); }}>
                                            <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                sx={{
                                                    color: "white",
                                                    '&.Mui-checked': {
                                                        color: "green",
                                                    },
                                                }}

                                            />
                                            <ListItemText style={{ color: "white" }}>{Object.keys(parts)}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </List>
                </Grid>
                <Grid marginTop={0.5} item style={{ border: "1px solid white" }} sx={{
                    width: "1185px",
                    minHeight: "87vh"
                }}>
                    {searchedData.length === 0 ?
                        <div style={{ backgroundColor: '#2a2e30' }}>
                            <Grid container justify="space-between" style={{ backgroundColor: '#2a2e30' }}>
                                <Typography variant='h4' inline align='left' color="common.white" style={{ padding: "20px" }} >{section}</Typography>
                                <Typography variant='h4' inline align='center' color="common.white" style={{ paddingTop: "20px", paddingLeft: "200px" }}>{displayHeading}</Typography>
                            </Grid>
                            < Divider sx={{ bgcolor: "common.white" }} />
                            <Typography paddingLeft="15px" color="common.white" paddingTop="15px" style={{ backgroundColor: "#2a2e30" }}>{displayData}</Typography>
                        </div>
                        :
                        <div style={{ backgroundColor: '#2a2e30' }}>
                            <Grid container justify="space-between" style={{ backgroundColor: '#2a2e30' }}>
                                <Typography variant='h4' inline align='center' color="common.white" style={{ paddingTop: "20px", paddingLeft: "300px", paddingBottom: "21px" }}>{Object.entries(searchedData[0])[0][0]}</Typography>
                            </Grid>
                            < Divider sx={{ bgcolor: "common.white" }} />
                            <Typography paddingLeft="15px" color="common.white" paddingTop="15px" style={{ backgroundColor: "#2a2e30" }}>{Object.entries(searchedData[0])[0][1]}</Typography>
                        </div>
                    }
                </Grid>
            </Grid>

        </Container>
    );
}

export default Learn1
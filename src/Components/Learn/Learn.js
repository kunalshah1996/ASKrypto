import { React, useState } from 'react';
import { Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, Box, Drawer, Typography, CssBaseline, ListItemButton, Collapse, CircularProgress, Container, Grid, ThemeProvider, createTheme, GlobalStyles, TextField, Autocomplete, InputAdornment } from '@mui/material';
import { ExpandLess, StarBorder, ExpandMore, } from '@mui/icons-material';
import SearchBar from 'material-ui-search-bar';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Learn = () => {

    const drawerWidth = 240;
    const [section2, setSection2] = useState(false);
    const [section1, setSection1] = useState(false);
    const [section3, setSection3] = useState(false);
    const [section4, setSection4] = useState(false);
    const [section5, setSection5] = useState(false);

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
                <Typography variant='h4' style={{ paddingLeft: "20px" }} color="common.white">Learn</Typography>
                <Divider sx={{ bgcolor: "common.white" }} />

                <SearchBar
                    placeholder="Search"
                    style={{ height: "30px", marginBottom: "5px", marginTop: "5px", maxWidth: "200px", marginLeft: "20px" }}
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
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Starred" style={{ color: "white" }} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleSection2} style={{ color: "white" }}>
                        <ListItemText primary="Section 2" style={{ color: "white" }} />
                        <CircularProgress variant="determinate" value={95} size="25px" style={{ marginRight: "10px" }} />
                        {section2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={section2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} style={{ color: "white" }}>
                                <ListItemText primary="Starred" style={{ color: "white" }} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleSection3} style={{ color: "white" }}>
                        <ListItemText primary="Section 3" style={{ color: "white" }} />
                        <CircularProgress variant="determinate" value={50} size="25px" style={{ marginRight: "10px" }} />
                        {section3 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={section3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} style={{ color: "white" }}>
                                <ListItemText primary="Starred" style={{ color: "white" }} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleSection4} style={{ color: "white" }}>
                        <ListItemText primary="Section 4" style={{ color: "white" }} />
                        <CircularProgress variant="determinate" value={30} size="25px" style={{ marginRight: "10px" }} />
                        {section4 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={section4} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} style={{ color: "white" }}>
                                <ListItemText primary="Starred" style={{ color: "white" }} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleSection5} style={{ color: "white" }}>
                        <ListItemText primary="Section 5" style={{ color: "white" }} />
                        <CircularProgress variant="determinate" value={20} size="25px" style={{ marginRight: "10px" }} />
                        {section5 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={section5} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} style={{ color: "white" }}>
                                <ListItemText primary="Starred" style={{ color: "white" }} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
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
                PaperProps={{ style: { marginTop: '13vh' } }}
                variant="permanent"
                anchor="right"
                borderColor="red"
                borderRight={1}
            >
                <div style={{ backgroundColor: '#2a2e30' }}>
                    <Grid container justify="space-between" style={{ backgroundColor: '#2a2e30' }}>
                        <Typography variant='h4' inline align='left' color="common.white" style={{ padding: "20px" }} >Section 1:</Typography>
                        <Typography variant='h4' inline align='center' color="common.white" style={{ paddingTop: "20px", paddingLeft: "200px" }}>Bitcoin</Typography>
                    </Grid>
                    < Divider sx={{ bgcolor: "common.white" }} />
                    <Typography paddingLeft="15px" color="common.white" paddingTop="15px" style={{ backgroundColor: "#2a2e30" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vero necessitatibus officiis ducimus illo consequatur assumenda aspernatur ipsa eum a vel labore eos repellat, consectetur saepe adipisci rerum atque inventore.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi tempora aperiam quae qui, provident fugiat odio commodi aspernatur harum impedit natus ullam tenetur pariatur nobis! Sunt commodi molestias voluptate maxime!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ut recusandae, placeat assumenda impedit tenetur quisquam minima veniam consequuntur sunt deleniti aut commodi cumque reiciendis, est, quam quibusdam voluptates nesciunt?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime, reiciendis quis dolorem facere dicta. Esse, mollitia pariatur dicta quisquam magni sapiente nisi necessitatibus ab voluptates adipisci delectus est id.
                    </Typography>
                </div>
            </Drawer>
            {/* <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Typography variant='h4'>Hello</Typography>
                <Divider></Divider>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box> */}
        </Box >
    );
}

export default Learn
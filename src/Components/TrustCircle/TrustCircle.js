import { React, useEffect, useState } from "react";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import CreateIcon from '@mui/icons-material/Create';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
    TextField,
    Stack,
    Box,
    Grid,
    Typography,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    IconButton,
} from "@mui/material";

const TrustCircle = () => {
    const friendsData = {
        friend: [
            {
                Name: "Kunal",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Sam",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Jason",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "James",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Jones",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },


        ],
    };

    const peopleData = {
        people: [
            {
                Name: "Kunal",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Sam",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Jason",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "James",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Jones",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Ronaldo",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Bruno",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
            {
                Name: "Camila",
                Mutual: "30",
                TopInvestments: "BTC,ETH",
            },
        ],
    };
    const circlesData = {
        circle: [
            {
                Name: "BTC",
                Members: ["Kunal", "Sam"],
            },
            {
                Name: "ETH",
                Members: ["Kunal", "Jason"],
            },
            {
                Name: "AAVE",
                Members: ["Kunal", "Sam", "James"],
            },
            {
                Name: "MATIC",
                Members: ["Kunal", "Sam", "James"],
            },
            {
                Name: "LINK",
                Members: ["Kunal", "Sam", "James"],
            },
        ],
    };

    const handleCreate = () => {
        setCreateDialog(true);
    };
    const handleCreateClose = () => {
        setCreateDialog(false);
    };
    const addPeopleGroup = (e, person) => {
        e.preventDefault();
        e.stopPropagation();
        setCreateGroup({ ...createGroup, Members: [...createGroup.Members, person] })

    };
    const handleCreateForm = () => {
        setCircles([...circles, createGroup])
        handleCreateClose();
    };


    const addFriend = (e, name) => {
        console.log("in add friend");
        e.preventDefault();
        e.stopPropagation();
        if (friends.some(person => person.Name === name)) {
            return;
        }
        else {
            setFriends([...friends, people.filter(e => e.Name === name)[0]])
        }
    };



    const [createDialog, setCreateDialog] = useState(false);
    const [friends, setFriends] = useState(friendsData.friend);
    const [circles, setCircles] = useState(circlesData.circle);
    const [people] = useState(peopleData.people);
    const [createGroup, setCreateGroup] = useState({ Name: "", Members: [] })

    console.log(friends);
    return (
        <Container disableGutters maxWidth="disable">
            <Container
                disableGutters
                maxWidth="disable"
                sx={{
                    borderTop: "0.1em solid white",
                    borderBottom: "0.1em solid white",
                }}
            >
                <Typography variant="h4" color="common.white" padding={"20px"}>
                    Hi Name!
                </Typography>
            </Container>
            <Grid container direction={"row"} marginTop={2}>
                <Grid item width="49%" marginLeft={1}>
                    <Grid direction={"column"}>
                        <Grid
                            item
                            style={{ border: "1px solid white", borderRadius: "5px" }}
                            overflow="auto"
                            maxHeight={300}
                            sx={{
                                '&::-webkit-scrollbar': {
                                    width: "0px"
                                },
                            }}
                        >
                            <Grid container direction={'row'} justifyContent='space-between'>
                                <Grid item >
                                    <Link to="" style={{ textDecoration: "none" }}>
                                        <Typography color="common.white" variant="h5">
                                            My Friends
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item justifyContent={'flex-end'} justifyItems={'flex-end'} >
                                    <IconButton style={{ color: "white" }} alignItems={'right'}>
                                        <PeopleAltIcon style={{ marginRight: '10px' }}></PeopleAltIcon> See all
                                    </IconButton>
                                </Grid>


                            </Grid>


                            <Grid container direction={"row"} marginTop="20px">
                                {friends.map((friend) => (
                                    <Grid
                                        item
                                        style={{
                                            border: "0.5px solid white",
                                            borderRadius: "5px",
                                            marginLeft: "25px",
                                            marginTop: "10px",
                                        }}
                                        width="20%"
                                    >
                                        <Grid
                                            container
                                            direction={"row"}
                                            paddingTop={1}
                                            paddingLeft={1}
                                        >
                                            <Grid item>
                                                <Avatar sx={{ width: 32, height: 32 }}>
                                                    {friend.Name.charAt(0)}
                                                </Avatar>
                                            </Grid>
                                            <Grid item direction={"row"} paddingLeft={1}>
                                                <Grid item overflow={'auto'} sx={{
                                                    '&::-webkit-scrollbar': {
                                                        width: "0px"
                                                    },
                                                }}>
                                                    <Typography>{friend.Name}</Typography>
                                                </Grid>
                                                <Grid item alignContent={"end"}>
                                                    <Typography variant="caption">
                                                        {friend.Mutual} mutuals
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container direction={"column"} paddingLeft={1}>
                                            <Typography variant="caption">
                                                Top Investments:
                                            </Typography>
                                            {friend.TopInvestments.split(",").map((investment) => (
                                                <Typography variant="caption">{investment}</Typography>
                                            ))}
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            style={{
                                border: "1px solid white",
                                borderRadius: "5px",
                                marginTop: "20px",
                            }}
                        >
                            <Grid container direction={'row'} justifyContent='space-between'>
                                <Grid item >
                                    <Link to="" style={{ textDecoration: "none" }}>
                                        <Typography color="common.white" variant="h5">
                                            My Circles
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item justifyContent={'flex-end'} justifyItems={'flex-end'} >
                                    <IconButton style={{ color: "white" }} alignItems={'right'}>
                                        <PeopleAltIcon style={{ marginRight: '10px' }}></PeopleAltIcon> See all
                                    </IconButton>
                                </Grid>


                            </Grid>
                            <Grid
                                container
                                direction={"row"}
                                marginTop="20px"
                                overflow={"auto"}
                                maxHeight={250}
                                sx={{
                                    '&::-webkit-scrollbar': {
                                        width: "0px"
                                    },
                                }}
                            >
                                {circles.map((circle) => (

                                    <Grid
                                        container
                                        direction={'row'}
                                        marginTop={2}
                                        borderRadius={"50%"}
                                        border={1}
                                        borderColor="common.white"
                                        width={130}
                                        height={130}
                                        marginLeft={2}
                                        justifyContent="center"
                                        alignItems="center"
                                    >

                                        <Link style={{ textDecoration: 'none' }} to={'/btccircle'}>

                                            <IconButton item style={{ color: "white" }} >

                                                <Typography marginRight={1} item variant='body1'>{circle.Name}</Typography>

                                            </IconButton>
                                        </Link>

                                        <IconButton item style={{ color: "white" }}>
                                            <GroupAddIcon />
                                        </IconButton>
                                    </Grid>
                                ))}


                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item width="49%" marginLeft={1}>
                    <Grid direction={"column"}>
                        <Grid
                            item
                            style={{ border: "1px solid white", borderRadius: "5px" }}
                            direction={'row'}
                        >
                            <Link to='/messenger' style={{ textDecoration: 'none' }}>
                                <Button sx={{ marginTop: "10px", marginBottom: "10px", marginLeft: "100px" }} variant="contained" startIcon={<ChatIcon />}>
                                    Chat
                                </Button>
                            </Link>
                            <Button sx={{ marginTop: "10px", marginBottom: "10px", marginLeft: "100px" }} variant="contained" startIcon={<CreateIcon />} onClick={handleCreate}>
                                Create
                            </Button>
                            <Dialog open={createDialog} onClose={handleCreateClose}>
                                <DialogTitle>Create New Circle
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleCreateClose}
                                        sx={{
                                            position: 'absolute',
                                            right: 8,
                                            top: 8,
                                            color: (theme) => theme.palette.grey[500],
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </DialogTitle>

                                <DialogContent>
                                    <Grid container direction={'column'}>
                                        <Grid item>
                                            <Grid container direction={'row'}>
                                                <Grid item>
                                                    <Typography>Group Name</Typography>
                                                </Grid>
                                                <Grid item marginLeft={10}>
                                                    <TextField
                                                        autoFocus
                                                        margin="none"
                                                        id="GroupName"
                                                        type="text"
                                                        size="small"
                                                        variant="standard"
                                                        value={createGroup.groupName}
                                                        onChange={(event) => { setCreateGroup({ ...createGroup, Name: event.target.value }) }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item marginTop={3}>
                                            <Grid container direction={'row'}>
                                                <Grid item>
                                                    <Typography>Add People</Typography>
                                                </Grid>
                                                <Grid item marginLeft={10}>
                                                    <Grid borderRadius={5} overflow={'auto'} maxHeight={150} sx={{
                                                        '&::-webkit-scrollbar': {
                                                            width: "0px"
                                                        },
                                                    }} >
                                                        {
                                                            people.map((person) => (
                                                                <Grid container direction={'row'}>
                                                                    <Typography marginLeft={1}>{person.Name}</Typography>
                                                                    <Checkbox
                                                                        style={{ paddingTop: "0px", marginTop: "0px" }}
                                                                        onChange={(e) => { addPeopleGroup(e, person.Name) }}
                                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                                    />
                                                                    {/* <IconButton style={{ marginLeft: "30px" }} onClick={(e) => { addPeopleGroup(e, person.Name) }} >
                                                                        <PersonAddIcon sx={{ fontSize: "15px" }} />
                                                                    </IconButton> */}
                                                                </Grid>
                                                            ))
                                                        }

                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCreateForm}>Submit</Button>
                                </DialogActions>
                            </Dialog>
                            <Button sx={{ marginTop: "10px", marginBottom: "10px", marginLeft: "100px" }} variant="contained" startIcon={<ManageAccountsIcon />}>
                                Manage
                            </Button>
                        </Grid>
                        <Grid
                            maxHeight={557}
                            overflow={'auto'}
                            item
                            style={{
                                border: "1px solid white",
                                borderRadius: "5px",
                                marginTop: "20px",
                            }}
                        >
                            <Grid container direction={'row'} justifyContent='space-between' >
                                <Grid item >
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        <Typography color="common.white" variant="h5">
                                            People
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item justifyContent={'flex-end'} justifyItems={'flex-end'} >
                                    <IconButton style={{ color: "white" }} alignItems={'right'}>
                                        <PeopleAltIcon style={{ marginRight: '10px' }}></PeopleAltIcon> See all
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid item direction={'column'}>

                                {people.map((person) => (
                                    <Grid container direction={'row'} style={{
                                        border: "1px solid white",
                                        borderRadius: "5px",
                                        marginTop: "10px",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                        maxWidth: "70%"

                                    }}>
                                        <Grid item marginTop={1} marginBottom={1} marginLeft={1}>
                                            <Avatar>{person.Name.charAt(0)}</Avatar>
                                        </Grid>
                                        <Grid item direction={'column'} marginTop={1} marginBottom={1} marginLeft={1}>
                                            <Typography>{person.Name}</Typography>
                                            <Typography>Top Investments: {person.TopInvestments}</Typography>
                                        </Grid>
                                        <Grid item marginLeft={15}>
                                            <IconButton style={{ color: 'white' }} onClick={(e) => { addFriend(e, person.Name) }}>
                                                <PersonAddIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    );
};

export default TrustCircle;

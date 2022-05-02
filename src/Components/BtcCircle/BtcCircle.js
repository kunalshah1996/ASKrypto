import { React, useState, useRef, useEffect } from 'react'
import GifBoxIcon from "@mui/icons-material/GifBox";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
    Container,
    List,
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
    InputAdornment,
    ListItem,
    Avatar,
    ListItemText,
    IconButton,
} from "@mui/material";


const BtcCircle = () => {

    const drawerWidth = 240;
    const circlesData = {
        circle: [
            {
                Name: "BTC",
                Members: ["Kunal", "Sam"],
            },
        ]
    };

    const [members] = useState(circlesData.circle[0].Members);
    console.log(members);

    const chat = {
        message: [
            {
                Name: "Jennifer D",
                Message:
                    "Hey so I need to move an aave position of fairly signficant size to a new hardware wallet and want to do it as quickly and cleanly as possible without any messy de/releveraging Could I do this without withdrawing? ",
                Time: "1",
            },
            {
                Name: "Marcus Young",
                Message:
                    "I am a 20-year-old college student, bought three of them, my first NFT purchase. I paid 0.04 Eth each for minting. I got rug pulled. The creators went away with 1.1 million dollars. :'(",
                Time: "2",
            },
            {
                Name: "Jenny K.",
                Message:
                    "That is so sad. The project really looked professionally made and rug pulls in NFTs are getting common. ",
                Time: "3",
            },
            {
                Name: "Chris N.",
                Message:
                    "I hope you're okay. I heard that they deleted the discord server ",
                Time: "4",
            },
        ],
    };
    const chatMessage = useRef(null);
    const [chats, setChats] = useState(chat.message);
    const [message, SetMessage] = useState({});
    const scrollRef = useRef(null);

    const sendMessage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setChats([...chats, message]);
        chatMessage.current.value = "";


    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        }
    }, [chats]);

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
                    CIRCLE
                </Typography>
            </Container>
            <Grid container direction={'row'} >
                <Grid item minWidth={drawerWidth} maxWidth={drawerWidth} style={{ border: "1px solid white" }}  >
                    <Typography>Members</Typography>
                    <List>
                        {
                            members.map((member) => (
                                <ListItem>
                                    <Typography>{member}</Typography>
                                </ListItem>
                            ))
                        }
                    </List>


                </Grid>
                <Grid item style={{ border: "1px solid white" }} >
                    <Grid container direction={"column"}>
                        <Grid item direction={"column"} maxHeight={450} overflow={"auto"}>
                            <List>
                                {chats.map((message) => (
                                    <ListItem ref={scrollRef}>
                                        <Grid container direction={"row"}>
                                            <Grid item marginTop={1}>
                                                <Avatar></Avatar>
                                            </Grid>
                                            <Grid item marginLeft={2} marginTop={1}>
                                                <Grid
                                                    container
                                                    direction={"column"}
                                                    overflow={"auto"}
                                                    maxWidth={900}
                                                >
                                                    <Grid item>
                                                        <Grid container direction={"row"} overflow={"auto"} columnSpacing={5}>
                                                            <Grid item>
                                                                <ListItemText>{message.Name}</ListItemText>
                                                            </Grid>
                                                            <Grid item>
                                                                <ListItemText>
                                                                    {message.Time}
                                                                </ListItemText>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <ListItemText multiline>{message.Message}</ListItemText>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item marginTop={5} marginBottom={3}>
                            <Grid container direction={"row"}>
                                <IconButton style={{ color: "white" }}>
                                    <GifBoxIcon style={{ fontSize: 40 }} />
                                </IconButton>
                                <TextField
                                    autoFocus
                                    inputRef={chatMessage}
                                    id="message"
                                    label="Type message"
                                    multiline
                                    InputLabelProps={{
                                        style: { color: "white" },
                                    }}
                                    sx={{
                                        maxWidth: "50%",
                                        minWidth: "70%",
                                        color: "white",
                                        ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                                            color: "white",
                                        },
                                    }}
                                    onChange={(event) => { SetMessage({ ...message, Name: "Name", Message: event.target.value, Time: new Date().toUTCString() }) }}
                                    InputProps={{
                                        sx: {
                                            color: "white",
                                            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid white !important",
                                            },
                                            "&:hover": {
                                                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid white",
                                                },
                                            },
                                        },
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton style={{ color: "white" }}>
                                                    <EmojiEmotionsIcon />
                                                </IconButton>
                                                <IconButton style={{ color: "white" }}>
                                                    <MicIcon />
                                                </IconButton>
                                                <IconButton style={{ color: "white" }} onClick={(event) => { sendMessage(event) }}>
                                                    <SendIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

export default BtcCircle
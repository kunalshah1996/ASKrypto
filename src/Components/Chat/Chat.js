import { React, useState, useRef, useEffect } from "react";
import GifBoxIcon from "@mui/icons-material/GifBox";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
    Grid,
    TextField,
    InputAdornment,
    List,
    ListItem,
    Avatar,
    ListItemText,
    IconButton,
} from "@mui/material";
import { color } from "@mui/system";

const Chat = () => {
    const chat = {
        message: [
            {
                Name: "Jennifer D",
                Message:
                    "Hey so I need to move an AAAVE position of fairly signficant size to a new hardware wallet and want to do it as quickly and cleanly as possible without any messy de/releveraging Could I do this without withdrawing? ",
                Time: "Tue, 26 Apr 2022 05:56:51 GMT",
            },
            {
                Name: "Marcus Young",
                Message:
                    "I am a 20-year-old college student, bought three of them, my first NFT purchase. I paid 0.04 Eth each for minting. The creators went away with 1.1 million dollars. Should I be considering it as Bitcoin Bubble??:'(",
                Time: "Tue, 26 Apr 2022 06:15:32 GMT",
            },
            {
                Name: "Jenny K.",
                Message:
                    "What are the those? I have no idea. Can someone help me out here?",
                Time: "Tue, 26 Apr 2022 06:32:11 GMT",
            },
            {
                Name: "Chris N.",
                Message:
                    "Jenny, I think you should check out Crypto Myths in the Learn section! ",
                Time: "Tue, 26 Apr 2022 07:12:51 GMT",
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
        <Grid
            marginTop={15}
            container
            disableGutters
            maxWidth="disable"
            sx={{
                borderTop: "0.1em solid white",
                borderBottom: "0.1em solid white",
                borderLeft: "0.1em solid white",
                borderRight: "0.1em solid white",
                borderRadius: "5px",
                width: "95%",
                marginLeft: "30px",
            }}
        >
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
    );
};

export default Chat;

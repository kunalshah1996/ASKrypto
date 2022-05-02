import React from 'react';
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
    Card,
    CardMedia
} from "@mui/material";
import image from './home.png'


const Home = () => {
    const steps = [
        {
            label: 'Select campaign settings',
            description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
        },
        {
            label: 'Create an ad group',
            description:
                'An ad group contains one or more ads which target a shared set of keywords.',
        },
        {
            label: 'Create an ad',
            description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
        },
    ];
    return (
        <Container disableGutters maxWidth="disable">
            <Grid container alignItems='center' justifyContent='center' direction={'column'}>
                <Grid item justifyContent="center">
                    <Card sx={{ maxWidth: 1600 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            width="1600"
                            image={image}
                        />

                    </Card>
                </Grid>
                <Grid item>
                    <Link to='/learn' style={{ textDecoration: 'none' }}>
                        <Button sx={{ marginTop: "40px", marginBottom: "10px" }} variant="contained">Start Learning</Button>
                    </Link>
                </Grid>
            </Grid >

        </Container>
    );
}

export default Home
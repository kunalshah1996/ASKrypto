import React from 'react'
import GoogleDocsViewer from "react-google-docs-viewer";
import { Grid } from '@material-ui/core';


const About = () => {
    return (
        <Grid container align="center" justify="center" justify-content="center" >
            <iFrame style={{ maxWidth: 840, width: '100%', minHeight: 1000, height: '100%' }} src="https://docs.google.com/document/d/e/2PACX-1vRLUrEDoZAtGrk5M4tII7dKs_YL1uecqQb18Pth7w8MVbyHPkx7gp5LmwkLqDaLQK98mWG7zlzE__ed/pub?embedded=true"></iFrame>
        </Grid>
    )
}

export default About
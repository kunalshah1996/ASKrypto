import React from 'react'
import GoogleDocsViewer from "react-google-docs-viewer";


const About = () => {
    return (
        <>
            <iFrame style={{ maxWidth: 840, width: '100%', minHeight: 1000, height: '100%' }} src="https://docs.google.com/document/d/e/2PACX-1vR112mTTiXt77I-6SWYSX71wAgYu_SdWxk7hYkRUAcud6WJ_KishQb32mIOwxp3A-_V3qlxY-aGfs2U/pub?embedded=true"></iFrame>
        </>
    )
}

export default About
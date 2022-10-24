import React, {useState } from 'react';
import './upload.css'
import Dialog from '@mui/material/Dialog';
import LogoSmall from './logoSmall';
import DialogContent from '@mui/material/DialogContent';
import Button from 'react-bootstrap/Button';
import { DialogActions, DialogTitle } from '@mui/material';
import Dropzone from 'react-dropzone';

function Upload() {
    const [expanded, setExpanded] = useState(false);
    const [expandedResults, setExpandedResults] = useState(false);

    const handleClickOpen = () => {
        setExpanded(true);
    };
    
    const handleClose = () => {
        setExpanded(false);
    };
    const handleResultsClose = () => {
        setExpandedResults(false);
    };
    const handleResultsOpen = () => {
        setExpandedResults(true);
    };

    const acceptedFiles = [];

    const populateAcceptedFiles = (accepted) => {
        acceptedFiles[0] = accepted;
    };

    const updateFileList = () => {
        //console.log(acceptedFiles[0]); //this gives an array of the files
        if(acceptedFiles[0] != null) {
        const fl = acceptedFiles[0].map((file) => (
            <li key={file.path}>
                {file.path} - {(file.size/1000000).toFixed(2)} MB
            </li>
        ));
        return fl;
        }
    };

    const resultsPage = () => {
        handleClose();
        handleResultsOpen();
    }


    return(
        <div>
            <Button variant="dark" onClick={handleClickOpen}>
                Upload New Document
            </Button>
            
            <Dialog open={expanded} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>
                    <div id='logoSmall'>
                        <LogoSmall/>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Dropzone onDrop={populateAcceptedFiles}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div id = 'content' {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div class="drag-area">
                                    <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                                    <header>Drag & Drop to Upload File</header>
                                    <span>or</span>
                                    <button>Browse File</button>
                                    
                                </div>
                                </div>
                                <aside>
                                    <ul>{updateFileList()}</ul>
                                </aside>
                            </section>
                        )}
                    </Dropzone>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={resultsPage} color="primary">
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
            
            <Dialog open={expandedResults} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>
                    <div id='logoSmall'>
                        <LogoSmall/>
                    </div>
                </DialogTitle>
                <div class = "resultsHead">
                <header>Document Review</header>
                <header2>Please Confirm the Parsed Information Below</header2>
                <subtitle>double click any field to edit</subtitle>
                </div>
                <div class = "resultsList">
                <p>Title:</p>
                <p>Compound Name:</p>
                <p>Extraction Method:</p>
                </div>
                <div class = "resultsBtn">
                <button onClick={handleResultsClose}>Save</button>
                </div>
                
            </Dialog>
        </div>
    )

}

export default Upload;
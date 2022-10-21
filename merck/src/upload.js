import React, { Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from 'react-bootstrap/Button';
import { DialogActions, DialogTitle } from '@mui/material';
import Dropzone from 'react-dropzone';
import { useRef } from 'react';
import { display, width } from '@mui/system';

function Upload() {
    const [expanded, setExpanded] = useState(false);

    const handleClickOpen = () => {
        setExpanded(true);
    };
    
    const handleClose = () => {
        setExpanded(false);
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


    return(
        <div>
            <Button variant="dark" onClick={handleClickOpen}>
                Upload New Document
            </Button>
            <Dialog open={expanded} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>File Upload</DialogTitle>
                <DialogContent>
                    <Dropzone onDrop={populateAcceptedFiles}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag your files here</p>
                                    <p>or</p>
                                    <p>Click to select files</p>
                                </div>
                                <aside>
                                    <h4>Files</h4>
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
                    <Button onClick={handleClose} color="primary">
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default Upload;
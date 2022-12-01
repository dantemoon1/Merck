import React, {useState } from 'react';
import './upload.css'
import Dialog from '@mui/material/Dialog';
import LogoSmall from './logoSmall';
import DialogContent from '@mui/material/DialogContent';
import Button from 'react-bootstrap/Button';
import { DialogActions, DialogTitle } from '@mui/material';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { boxSizing } from '@mui/system';

function Upload() {
    const [expanded, setExpanded] = useState(false);
    const [expandedResults, setExpandedResults] = useState(false);
    //state variable for json response from backend
    const [parsed, setParsed] = useState(null);

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

const populateAcceptedFiles =  (accepted) => {
        acceptedFiles[0] = accepted;
        //upload(accepted[0]);
        //console.log(typeof acceptedFiles[0]);
        //upload the pdf to the backend
    };

    const upload = async () => {
        let url = 'https://fastapi-dantemoon1.cloud.okteto.net/upload';
        const form = new FormData();
        form.append('file', acceptedFiles[0][0]);
        axios({
            method: 'post',
            url: url,
            data: form,
            headers: {'Content-Type': 'undefined' }
        }).then((response) => {
            console.log(response);
            setParsed(response.data);
            handleResultsOpen();
        }).catch((error) => {
            console.log(error);
        });
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

    const buildResults = () => {
        var results = [];
        if(parsed != null) {
            for(var i = 0; i < parsed.length; i++) {
                var obj = parsed[i];
                for (var key in obj){
                    var val = obj[key];
                    results.push(<tr><td>{key}</td><td>{val}</td></tr>);
                }
            }
        }
        //console.log(results);
        return results;
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
                    <Button onClick={upload} color="primary">
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
                <table>{buildResults()}</table>
                </div>
                <div class = "resultsBtn">
                <button onClick={handleResultsClose}>Save</button>
                </div>
                
            </Dialog>
        </div>
    )

}

export default Upload;
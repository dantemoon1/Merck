import React, { Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import LogoSmall from './logoSmall';
import Button from 'react-bootstrap/Button';
import { DialogActions, DialogTitle } from '@mui/material';
import Dropzone from 'react-dropzone';
import { useRef } from 'react';
import { display, width } from '@mui/system';

export default function Results() {
    const [expanded, setExpanded] = useState(false);
    const inputRef = useRef(null);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setExpanded(false);
    };

    return(
        <div>

            <Dialog open={expanded} onClose={handleClose} fullWidth maxWidth="sm">
                
            </Dialog>
        </div>
    )

}


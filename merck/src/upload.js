import React, { Fragment, useState } from "react";
import "./upload.css";
import Dialog from "@mui/material/Dialog";
import ClickEdit from "./ClickEdit";
import LogoSmall from "./logoSmall";
import Results from "./results";
import DialogContent from "@mui/material/DialogContent";
import Button from "react-bootstrap/Button";
import { DialogActions, DialogTitle } from "@mui/material";
import Dropzone from "react-dropzone";
import { useRef } from "react";
import { display, width } from "@mui/system";

function Upload() {
  const txt = '{"Title":"parsed info", "Compound Name":"parsed info", "Extraction Method":"parsed info"}'
  const parsed = JSON.parse(txt);
  const [expanded, setExpanded] = useState(false);
  const [attribute1, setAttribute1] = useState(parsed.Title);
  const [showValue, setShowValue] = useState(false);

  /*
  const [attribute2, setAttribute2] = useState("");
  const [attribute3, setAttribute3] = useState(variable);
  const [attribute4, setAttribute4] = useState(variable);*/

  const [expandedResults, setExpandedResults] = useState(false);
  const inputRef = useRef(null);

  const [open, setOpen] = React.useState(false);

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
    if (acceptedFiles[0] != null) {
      const fl = acceptedFiles[0].map((file) => (
        <li key={file.path}>
          {file.path} - {(file.size / 1000000).toFixed(2)} MB
        </li>
      ));
      return fl;
    }
  };

  const resultsPage = () => {
    handleClose();
    handleResultsOpen();
  };

  

  return (
    <div>
      <Results></Results>
      <Button variant="dark" onClick={handleClickOpen}>
        Upload New Document
      </Button>

      <Dialog open={expanded} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <div id="logoSmall">
            <LogoSmall />
          </div>
        </DialogTitle>
        <DialogContent>
          <Dropzone onDrop={populateAcceptedFiles}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div id="content" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div class="drag-area">
                    <div class="icon">
                      <i class="fas fa-cloud-upload-alt"></i>
                    </div>
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

      <Dialog
        open={expandedResults}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <div id="logoSmall">
            <LogoSmall />
          </div>
        </DialogTitle>
        <div class="resultsHead">
          <header>Document Review</header>
          <header2>Please Confirm the Parsed Information Below</header2>
          <subtitle>double click any field to edit</subtitle>
        </div>
        <div class="resultsList">
          <div>

          </div>
        </div>
        <div class="container">

  

  <div class="row">
    <div class="col-md-12">
      <table class="table table-bordered" id="editableTable">
        <thead>
          <tr>
            
            <th>Value</th>
            <th>Feature</th>
          </tr>
        </thead>
        <tbody>
          <tr data-id="1">
            <td data-field="Feature">Title</td>
            <td data-field="Value"><ClickEdit
                value={attribute1}
                handleChange={(e) => setAttribute1(e.target.value)}
                handleDoubleClick={() => setShowValue(true)}
                handleBlur={() => setShowValue(false)}
                showValue={showValue}
              /></td>
          </tr>
          <tr data-id="2">
            <td data-field="Feature">Compound Name</td>
            <td data-field="Value">parsed info</td>
          </tr>
          <tr data-id="3">
            <td data-field="Feature">Extraction Method</td>
            <td data-field="Value">parsed info</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
        <div class="resultsBtn">
          <button onClick={handleResultsClose}>Save</button>
        </div>
      </Dialog>
    </div>
  );
}

export default Upload;

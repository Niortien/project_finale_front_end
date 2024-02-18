// FileInput.js

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './FileInput.css';

const FileInput = ({ onChange, accept, children }) => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      onChange(selectedFile);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="file-input">
      <input {...getInputProps()} />
      {file ? (
        <img src={URL.createObjectURL(file)} alt="Selected" className="selected-image" />
      ) : (
        children
      )}
    </div>
  );
};

export default FileInput;

import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel,
} from './ImageUpload.styles';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;
const KILO_BYTES_PER_BYTE = 1000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const ImageUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const dispatch = useDispatch();

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    if (filesAsArray) {
      convertBase64(filesAsArray[0]);
    }
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const convertBase64 = (file) => {
    try {
      //reader needed to convert files to base64
      let reader = new FileReader();
      //converts the file to base64
      reader.readAsDataURL(file);
      //once file is loaded do the things
      reader.onload = () => {
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: convertBytesToKB(file.size) + 'kb',
          base64: reader.result,
          file: file,
        };
        reader.onerror = (err) => {
          alert(
            'Something went wrong trying to upload your image please try again!'
          );
          console.error(err);
        };
        dispatch({ type: 'SET_PRICE_IMAGE', payload: fileInfo });
      };
    } catch (err) {
      console.error('Something went wrong!');
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    dispatch({ type: 'DELETE_IMAGE' });
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  return (
    <>
      <FileUploadContainer>
        <InputLabel>{label}</InputLabel>
        <DragDropText>Drag & drop your images here or</DragDropText>
        <UploadFileBtn type='button' onClick={handleUploadBtnClick}>
          <i className='fas fa-file-upload' />
          <span> Upload {otherProps.multiple ? 'files' : 'a file'}</span>
        </UploadFileBtn>
        <FormField
          type='file'
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=''
          value=''
          {...otherProps}
        />
      </FileUploadContainer>
      <FilePreviewContainer>
        <span>Preview Image</span>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split('/')[0] === 'image';
            return (
              <PreviewContainer key={fileName}>
                <div>
                  {isImageFile && (
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                  <FileMetaData isImageFile={isImageFile}>
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <RemoveFileIcon
                        className='fas fa-trash-alt'
                        onClick={() => removeFile(fileName)}
                      />
                    </aside>
                  </FileMetaData>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
    </>
  );
};

export default ImageUpload;

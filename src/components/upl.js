import React, { useState } from "react";
import FileUpload from "./upload/upload.jsx";

function Upl() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create a new user...
  };
  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Profile Image(s)"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
      </form>
    </div>
  );
}

export default Upl;
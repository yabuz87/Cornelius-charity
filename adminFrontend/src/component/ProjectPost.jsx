import React, { useState } from 'react';
import { usePostStore } from "../store/usePostStore.js";
import { LoaderIcon } from 'react-hot-toast';

const ProjectPost = () => {
  const { uploadProject,isProjectUploadLoading} = usePostStore();
  const [projectData, setProjectData] = useState({ title: "", description: "", photo: null });


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setProjectData({ ...projectData, photo: base64Image });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadProject(projectData);
    // Clear form data
    setProjectData({ title: "", description: "", photo: null });
  };

  return (
    <>
      <h3 className="text-center">Project and Impact Post</h3>
      <form className="text-center" onSubmit={handleSubmit} encType="multipart/form-data">
        <p>
          <input type="text" name="title" placeholder="Your title" style={{width: "50%"}} onChange={(e) => setProjectData({...projectData,title: e.target.value })} />
        </p>
        <textarea name="description" rows="23" cols="100" onChange={(e) => setProjectData({...projectData,description: e.target.value })}></textarea>
        <p>
          <input type="file" name="photo" onChange={handleImageUpload} />
        </p>
        <button className="btn btn-success px-3">
    {isProjectUploadLoading ? (
        <>
          
          <span className="d-flex justify-content-center align-items-center">  <LoaderIcon/>  Uploading...</span>

        </>
    ) : (
        'Submit'
    )}
</button>

      </form>
    </>
  );
};

export default ProjectPost;

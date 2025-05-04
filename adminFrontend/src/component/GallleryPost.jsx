import React, { useState } from 'react';
import { usePostStore } from "../store/usePostStore.js";
import { LoaderIcon } from "react-hot-toast";

const GalleryPost = () => {
  const { uploadGallery, isGalleryUploadLoading } = usePostStore();
  const [galleryData, setGalleryData] = useState({
    title: "",
    description: "",
    photo: null
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setGalleryData({ ...galleryData, photo: base64Image });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadGallery(galleryData);
    // Clear form data
    setGalleryData({ title: "", description: "", photo: null });
  };

  return (
    <>
      <h3 className="text-center">Upload Gallery</h3>
      <form className="text-center" onSubmit={handleSubmit} encType="multipart/form-data">
        <p>
          <input
            type="text"
            name="title"
            placeholder="Your title"
            style={{ width: "50%" }}
            onChange={(e) => setGalleryData({ ...galleryData, title: e.target.value })}
          />
        </p>
        <textarea
          name="description"
          rows="23"
          cols="100"
          onChange={(e) => setGalleryData({ ...galleryData, description: e.target.value })}
        ></textarea>
        <p>
          <input type="file" name="photo" onChange={handleImageUpload} />
        </p>
        <button className="btn btn-success px-3">
          {isGalleryUploadLoading ? (
            <span className="d-flex justify-content-center align-items-center">
              <LoaderIcon /> Uploading...
            </span>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </>
  );
}

export default GalleryPost;

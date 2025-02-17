"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handleImageChange(e) {
    const file = e.target.files[0];
    console.log(file);

    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked yet...</p>
          ) : (
            <Image src={pickedImage} alt="Image selected by the user" fill />
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className={classes.input}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={() => imageInputRef.current.click()}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

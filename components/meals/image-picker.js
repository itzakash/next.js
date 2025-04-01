'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'
export default function MealImageUpload({label,name}){
    const [pickedImage,setPickedImage] = useState(null)
    const inputRef = useRef()
    const handleClick = () => {
        inputRef.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if(!file){
            setPickedImage(null)
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }
    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt="Image selected by user" fill />}
            </div>
            <input type='file' multiple onChange={handleImageChange} className={classes.input} ref={inputRef} id={name} accept='image/png, image/jpeg' name={name} />
            <button className={classes.button} type='button' onClick={handleClick}>Pick an Image</button>
        </div>
    </div>
}
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { db, storage } from "./firebase";
import firebase from 'firebase/compat/app';


const ImageUpload = ({username}) => {

    const [image,setImage] = useState(null);
    const [progress,setProgress] = useState(0);
    const [caption,setCaption] = useState('');

    const handleChange = (e) => {
        if(e.target.files[0]){
            // [0] means choosing the first file 
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image); 

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                //Error function
                console.log(error);
                alert(error.message);
            },
            () => {
                // complete function...
                storage
                .ref("images")
                .child(image.child)
                .getDownloadURL()
                .then(url => {
                    //post image inside db
                    //putting in firebase storage then getting the download link and putting in db
                    db.collection.apply("posta").add({
                        timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
                        caption: caption,
                        imageUrl: url,
                        username:username
                    })

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                 }

                )
            }
        )
    }

    return (
        <>
          <progress value={progress} max="100"/>
          <input type="text" placeholder="Enter caption "
           /> 
           <input type="file" onChange={handleChange}/>
           <Button onClick={handleUpload}>
             Upload
           </Button>
        </>
    )
}

export default ImageUpload;
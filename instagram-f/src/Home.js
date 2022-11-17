import React, { useEffect, useState } from "react";
import './Home.css';
import  Story from'./Story.js';
import Posts from './Post.js';
import {auth, db} from './firebase';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageUpload from "./ImageUpload";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {

    const [posta,setPosta] = useState([]);
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [openSignIn,setOpenSignIn] = useState('');

    useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((authuser) => {
        if(authuser) {
          //user has logged in
          console.log(authuser);
          setUser(authuser);

        
        }else{
          //user has logged out
          setUser(null);
        }
      }) 

     return () => {
      // perform some cleanup action
      unsubscribe();
     }

    }, [user,username]);
    

    useEffect(() => {

      // snapshot function runs every time posta changes
      db.collection('posta').onSnapshot(snapshot => {
        setPosta(snapshot.docs.map(doc => ({
          id:doc.id,
          post: doc.data()
        })));
      })

    }, []);

    //signup--->
    const signup = (event) => {
        event.preventDefault();
         
        auth.createUserWithEmailAndPassword(email,password)
        .then((authuser) => {
          return authuser.user.updateProfile({
            displayName: username
          })
        })
        .catch((error) => alert(error.message));

        setOpen(false);
    }

    //signin--->
    const signin = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .catch((error) => alert(error.message));

        setOpenSignIn(false);
    }


    return(
        <>
           { user?
            (<Button onClick={() => auth.signOut()}>Log Out</Button>)
            :(
              <div className="app-loginContainer">
                  <Button onClick={() => setOpenSignIn(true)}>sign in</Button>
                  <Button onClick={() => setOpen(true)}>sign up</Button>
              </div>
            )}

            {/* imageupload---> */}
          { user?.displayName ? (
              <ImageUpload username={user.displayName}/>
            ): (
              <h3> Sorry You need to login to upload</h3>
            )
          }

           <Modal
              open={open}
              onClose={() => setOpen(false)}
             
             >
                 <Box sx={style}>
                  <form className="app-signup"> 
                   <center>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2t8hZjN4W7FW5YSjNI0Fl4K91xYTAFlZaQ&usqp=CAU'  height={100} alt="img"/>
                      </Typography>
                      <Typography           id="modal-modal-description" sx={{  mt: 2 }}>
                      <input
                        className="input-val"
                        placeholder="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                       />
                        
                      <input 
                       className="input-val"
                       placeholder="Email"
                       type="text"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                      />
                        
                      <input 
                       className="input-val"
                       placeholder="password"
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                      />
                        
                      </Typography>
                      <Button type="submit" onClick={signup}>sigh up</Button>
                    </center> 
                   </form>   
                 </Box>

             </Modal>

            {/* login */}

             <Modal
              open={openSignIn}
              onClose={() => setOpenSignIn}
             
             >
                 <Box sx={style}>
                  <form className="app-signup"> 
                   <center>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2t8hZjN4W7FW5YSjNI0Fl4K91xYTAFlZaQ&usqp=CAU'  height={100} alt="img"/>
                      </Typography>
                      <Typography           id="modal-modal-description" sx={{  mt: 2 }}>
                     
                        
                      <input 
                       className="input-val"
                       placeholder="Email"
                       type="text"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                      />
                        
                      <input 
                       className="input-val"
                       placeholder="password"
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                      />
                        
                      </Typography>
                      <Button type="submit" onClick={signin}>Login</Button>
                    </center> 
                   </form>   
                 </Box>

             </Modal>
           <div className="container">
              <div className="Story">
                <Story/>
              </div>
           </div>
           {
               posta.map(({id,post}) => (
                <Posts key={id} caption={post.caption} 
                username={post.username} imageurl={post.imageurl}/>
              ))
            }
        </>
    )
}

export default Home;

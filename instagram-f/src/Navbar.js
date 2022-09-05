 import React from 'react';
 import './Navbar.css';
//  import HomeIcon from '@mui/icons-material/Home';
//  import TelegramIcon from '@mui/icons-material/Telegram';
//  import AddBoxIcon from '@mui/icons-material/AddBox';
 import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
 import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
 import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
 import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
 import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
 import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  return (
     <>
       <div className='Navbar-container'>
           <div className='Navbar-logo'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2t8hZjN4W7FW5YSjNI0Fl4K91xYTAFlZaQ&usqp=CAU'  height={100} alt="img"/>
           </div>
           <div className='Navbar-searchbar'>
               <form>
                  
                  <input className=''></input>
               </form>
           </div>
           <div className='Navbar-icons'>
                <HomeOutlinedIcon fontSize='large'/> 
                 <SendOutlinedIcon fontSize='large'/> 
                 <AddBoxOutlinedIcon fontSize='large'/> 
                 <ExploreOutlinedIcon fontSize='large'/>
                 <FavoriteBorderOutlinedIcon fontSize='large'/>
                 <AccountCircleOutlinedIcon fontSize='large'/>
           </div>
       </div>

     </>
  );
}

export default Navbar
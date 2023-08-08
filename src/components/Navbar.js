import { Grid, Box,Typography, Button} from '@mui/material';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from './Loader';

const Navbar = () => {
    const {pathname}=useLocation()
    const {logout}=useAuth()
    const history=useNavigate()
    const [loading,setLoading]=useState(false)

    var output;

    const handleLogout=async(type)=>{
        setLoading(true)
        try{
            await logout()
            setLoading(false);
            if(type=="client"){
                history('/clogin')
            }
            else{
                history('/')
            }
        }catch(err){
            console.log(err)
            setLoading(false);
        }
    }

    if(pathname=="/")
    output=<Typography ><Link className="nav-link" to="/clogin"> Login as Client </Link>  </Typography>
    else if(pathname=="/clogin")
    output=<Typography ><Link className="nav-link" to="/"> Login as Talent </Link> </Typography>
    else if(pathname=="/signup")
    output=<Typography ><Link className="nav-link" to="/csignup"> Join as Client </Link> </Typography>
    else if(pathname=="/csignup")
    output=<Typography ><Link className="nav-link" to="/signup"> Join as Talent </Link> </Typography>
    else if(pathname=="/dashboard")
    output=<Typography><Button onClick={()=> handleLogout("client")} variant="contained" sx={{background:"#FF6B6B"}}>Logout</Button></Typography>
    else if(pathname=="/tdashboard")
    output=<Typography><Button onClick={()=> handleLogout("talent")} variant="contained" sx={{background:"#FF6B6B"}}>Logout</Button></Typography>

  if(pathname=="/home")
  return "";
  return (
    <Box sx={{width:"100%",background:"#6B9CFF",padding:"15px 40px"}}>
        <Grid container justifyContent={"space-between"}>
            <Grid item>
                <Typography sx={{color:"white",fontSize:"20px",fontWeight:500}}>
                    StuLancer
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    {loading?<Loader/>:output}
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Navbar
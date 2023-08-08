import { Box,Button,Container, Grid,Paper, TextField, Typography } from '@mui/material'
import React, { useEffect,useRef,useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { auth } from '../../firebase'

const Login = () => {
    const [currentPage,setCurrentPage]=useState("talent")
    const [loading,setLoading]=useState(false)
    const {pathname}=useLocation();
    const emailRef=useRef();
    const passRef=useRef();
    const history=useNavigate()

    useEffect(()=>{
        if(pathname=="/")
        setCurrentPage("talent")
        else
        setCurrentPage("client")
    },[pathname])

    const elements={
        talent: {
            title: "Login as Talent",
            signup:"/signup"
        },
        client:{
            title: "Login as Client",
            signup:"/csignup"
        }
    }

    const handleLogin=async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            await auth.signInWithEmailAndPassword(emailRef.current.value,passRef.current.value);
            setLoading(false);
            if(currentPage=="client"){
                history("/dashboard")
            }else{
                history("/tdashboard")
            }
        }catch(err){
            console.log(err)
            setLoading(false);
        }
    }

    



  return (
    <Container>
        <Grid container flexDirection={"row"} justifyContent={"center"}>
            <Grid item flex={2} sx={{display:'flex',flexDirection:"column",justifyContent:"center",pr:15}}>
                <Typography fontSize={"36px"} mb={2} mt={10}>
                    What is StuLancer ?
                </Typography>
                <Typography maxWidth={"500px"}>
                Stulancer is a freelancing application that provides students with a platform to offer their services and connect with clients who require their skills. This application is specifically designed for students, with the aim of giving them the chance to earn money while pursuing their education. Stulancer is an excellent opportunity for students who want to develop their professional skills, gain practical work experience, and earn an income.
                </Typography>
            </Grid>
            <Grid item flex={1}>
                <Paper elevation={2} sx={{width:"350px",textAlign:"center",padding:"15px",marginTop:"130px",borderRadius:"15px"}}>
                    <Typography sx={{marginY:"15px"}}>
                    {elements[currentPage].title}
                    </Typography>
                    <Box sx={{textAlign:"left"}}>
                        <label>
                            <Typography>
                                Email ID
                            </Typography>
                        </label>
                        <TextField inputRef={emailRef} size="small" sx={{width:"100%",margin:"8px 0 20px"}}/>

                        <label>
                            <Typography>
                                Password
                            </Typography>
                        </label>
                        <TextField type="password" inputRef={passRef} size="small" sx={{width:"100%",margin:"8px 0 20px"}}/>
                        <Button onClick={handleLogin} sx={{width:"100%",marginBottom:"12px"}} variant="contained">Submit</Button>
                        <Typography sx={{fontSize:"14px"}}>Already Have an Account? <Link to={elements[currentPage].signup}> Sign Up</Link> </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Login
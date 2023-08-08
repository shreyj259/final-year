import { Box,Button,Container, Grid,Paper, TextField, Typography } from '@mui/material'
import React, { useEffect,useRef,useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import Loader from '../Loader';


const Signup = () => {
    const nameRef=useRef()
    const emailRef=useRef()
    const passRef=useRef()
    const rePassRef=useRef()
    const fileRef=useRef()
    const [currentPage,setCurrentPage]=useState("talent")
    const [loading,setLoading]=useState(false);
    const {pathname}=useLocation();
    const {signup} =useAuth();
    const {currentUser}=useAuth();
    const history = useNavigate()

    useEffect(()=>{
        if(pathname=="/signup")
        setCurrentPage("talent")
        else
        setCurrentPage("client")

    },[pathname])

    const elements={
        talent: {
            title: "Join as Talent",
            signup:"/",
            submit:"talent",
            imageUpload:true
        },
        client:{
            title: "Join as Client",
            signup:"/clogin",
            submit:"client",
            imageUpload:false
        }
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            setLoading(true);
            await signup(emailRef.current.value,passRef.current.value);
            const database=doc(db,"users",auth.currentUser.uid)
            await setDoc(database,{
                name:nameRef.current.value,
                email:emailRef.current.value,
                role:currentPage
            })
            setLoading(false);
            if(currentPage=="client"){
                history("/dashboard")
            }else{
                history("/tdashboard")
            }
        }
        catch (err){
            setLoading(false);
            console.log(err)
            console.log("auth failed")
        }
    }




  return (
    <Container>
        <Grid container height={"90vh"} justifyContent={"center"} alignItems={"center"}>
        <Grid item flex={2} sx={{display:'flex',flexDirection:"column",justifyContent:"center",pr:15}}>
                <Typography fontSize={"36px"} mb={2} >
                    What is StuLancer ?
                </Typography>
                <Typography maxWidth={"500px"}>
                Stulancer is a freelancing application that provides students with a platform to offer their services and connect with clients who require their skills. This application is specifically designed for students, with the aim of giving them the chance to earn money while pursuing their education. Stulancer is an excellent opportunity for students who want to develop their professional skills, gain practical work experience, and earn an income.
                </Typography>
            </Grid>
            <Grid item flex={1} alignItems={"center"}>
                <Paper elevation={2} sx={{width:"350px",textAlign:"center",padding:"15px",borderRadius:"15px"}}>
                    <Typography sx={{marginY:"15px"}}>
                    {elements[currentPage].title}
                    </Typography>
                    <Box sx={{textAlign:"left"}}>
                        <label>
                            <Typography>
                                Full Name
                            </Typography>
                        </label>
                        <TextField inputRef={nameRef} size="small" sx={{width:"100%",margin:"8px 0 20px"}}/>

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
                        <label>
                            <Typography>
                                Retype Password
                            </Typography>
                        </label>
                        <TextField type="password" inputRef={rePassRef} size="small" sx={{width:"100%",margin:"8px 0 20px"}}/>
                        {elements[currentPage].imageUpload?<span><label >
                            <Typography>
                                Upload your student ID
                            </Typography>
                        </label>
                        <input ref={fileRef} type="file" /></span>:""}                           
                        {loading?<Loader/>:(
                            <Button onClick={handleSubmit} sx={{width:"100%",marginY:"12px"}} variant="contained">Submit</Button>
                        )
                        }
                        <Typography sx={{fontSize:"14px"}}>Already Have an Account? <Link to={elements[currentPage].signup}> Log In</Link> </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Signup
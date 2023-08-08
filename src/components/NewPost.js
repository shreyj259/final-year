import React, { useRef, useState } from 'react'
import { Box, Button, TextField, Typography, FormControl,OutlinedInput,InputAdornment, Select, MenuItem, InputLabel, Grid } from '@mui/material'
import { usePost } from '../context/PostContext'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width:"600px",
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border:"1px solid grey",
    borderRadius:"8px",
    boxShadow: 24,
    p: 4,
  };



const NewPost = ({setFormOpen}) => {
    const titleRef= useRef()
    const descRef=useRef()
    const budgetRef=useRef()
    const [exp,setExp]=useState("")
    const [deadline,setDeadline]=useState("")
    const [category,setCategory]=useState("")
    const {jobs,setJobs}=usePost()


    const submitHandler=(e)=>{
        e.preventDefault()
        let isValid=true
        if(titleRef.current.value==="")
        isValid=false
        else if(titleRef.current.value<3)
        isValid=false
        if(descRef.current.value==="")
        isValid=false
        else if(titleRef.current.value<10)
        if(budgetRef.current.value==="")
        isValid=false


        if(isValid)
        {
            let tempJobs=[...jobs]
            let temp={ 
                title:titleRef.current.value,
                desc:descRef.current.value,
                budget:budgetRef.current.value,
                exp:exp,
                deadline:deadline,
                category:category,
                bids:[]
            }
            tempJobs.push(temp)
            setJobs(tempJobs)
            setFormOpen(prev=>!prev)
        }
    }

    const handleDeadline=(e)=>{
      setDeadline(e.target.value)
    }

    const handleExp=(e)=>{
      setExp(e.target.value)
    }

    const handleCategory=(e)=>{
      setCategory(e.target.value)
    }


    const expMult={
      "beg":1,
      "inter":1.35,
      "exp":1.7
    }

    const deadlineMult={
      "1":2,
      "2":1.6,
      "3":1.4,
      "4":1.2,
      "5":1
    }

    const basePrice={
      "gra":20,
      "email":35,
      "app":100,
      "front":70,
      "back":90,
      "full":150
    }

    let estimatedPrice=0;
    if(exp!="" && deadline!="" && category!=""){
      console.log(basePrice[category]);
      console.log(deadlineMult[deadline])
      console.log(expMult[exp]);
      estimatedPrice=basePrice[category]*deadlineMult[deadline]*expMult[exp];
    }

  return (
    <Box sx={style}>
    <label> 
        <Typography >Job Title</Typography>
    </label>
    <TextField inputRef={titleRef} sx={{width:"100%",margin:"8px 0 20px"}} size='small' /> 
    <label> 
        <Typography > Job Description</Typography> 
    </label>
    <TextField inputRef={descRef} sx={{width:"100%",margin:"8px 0 20px"}} multiline rows={4} size='small' />

    <Grid container>
      <Grid item>
      <FormControl sx={{ m: 0, minWidth: 180 }} size="small">
      <InputLabel id="age-small-label">Experience Required</InputLabel>
      <Select
        labelId="age-small-label"
        id="age-select-small"
   
        label="Experince Required"
        onChange={handleExp}
      >
        <MenuItem value={"beg"}>Beginner</MenuItem>
        <MenuItem value={"inter"}>Intermediate</MenuItem>
        <MenuItem value={"exp"}>Experienced</MenuItem>
      </Select>
    </FormControl>
      </Grid>
      <Grid item>
      <FormControl sx={{ ml: 3, minWidth: 180 }} size="small">
      <InputLabel id="Deadline-small-label">Deadline</InputLabel>
      <Select
        labelId="Deadline-small-label"
        id="Deadline-select-small"
        label="Deadline"
        onChange={handleDeadline}
      >
        <MenuItem value={"1"}>3 days</MenuItem>
        <MenuItem value={"2"}>1 week</MenuItem>
        <MenuItem value={"3"}>15 days</MenuItem>
        <MenuItem value={"4"}>1 month</MenuItem>
        <MenuItem value={"5"}> More than 1 month</MenuItem>
      </Select>
    </FormControl>
      </Grid>
    </Grid>


    <Box>
    <FormControl sx={{ my: 2, minWidth:"250px" }} size="small">
      <InputLabel id="cat-small-label">Job Category</InputLabel>
      <Select
        labelId="cat-small-label"
        id="cat-select-small"
   
        label="Experince Required"
        onChange={handleCategory}
      >
        <MenuItem value={"gra"}>Graphic Design</MenuItem>
        <MenuItem value={"email"}>Email Development</MenuItem>
        <MenuItem value={"app"}>App Development</MenuItem>
        <MenuItem value={"front"}>Front-end Development</MenuItem>
        <MenuItem value={"back"}>Back-end Development</MenuItem>
        <MenuItem value={"full"}>Full-Stack Development</MenuItem>
      </Select>
     </FormControl>
    </Box>
    

    <Grid container>
      <Grid item flex={1}>
      <Box>
      <FormControl sx={{ mb: 2,minWidth: 200 }} size='small'>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            inputRef={budgetRef}
            size='small'
          />
        </FormControl>
      </Box>
      </Grid>
      <Grid item flex={1}>
        <Typography mt={0.5}>
        {estimatedPrice!=0?`Estimated Price : ${estimatedPrice.toFixed(2)}`:""}
        </Typography>
      </Grid>
    </Grid>
    
    

    
    
    <Button onClick={submitHandler} sx={{width:"100%"}} variant="contained" >Submit</Button>
  </Box>
  )
}

export default NewPost
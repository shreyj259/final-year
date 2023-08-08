import {  Typography, Paper,Box, Grid,Button } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import PostBid from '../PostBid';

const Post = ({title,desc,budget,exp,deadline,category,page,placeBidHandler,index,viewBidsHandler}) => {

  const expSelect={
    "beg":"Beginner",
    "inter":"Intermediate",
    "exp" : "Experienced"
  }

  const deadlineSelect={
    "1":"3 days",
    "2":"1 week",
    "3":"15 days",
    "4":"1 month",
    "5":"More than 1 month"
  }

  const catSelect={
    "gra":"Graphic Design",
    "email":"Email Development",
    "app":"App Development",
    "front":"Front-end Development",
    "back":"Back-end Development",
    "full":"Full-Stack Development"
  }

  

  return (
    <Paper sx={{width:"100%",background:"#ffffff",padding:2,marginY:1}}>
      <Grid container justifyContent={"space-between"} alignItems={"center"} sx={{borderBottom:"1px solid #D8D8D8",paddingBottom:1}}>
        <Grid item>
        <Typography variant='h5'>{title}</Typography>
        </Grid>
        <Grid item>
          {page=="talent"?"":<Button ><DeleteIcon sx={{color:"#FF6B6B"}}/></Button>}
          
        </Grid>
      </Grid>
      <Box paddingY={1}>
      <Typography>{desc}</Typography>
      </Box>
      <Grid container justifyContent={"space-between"} sx={{color:"grey",my:"3px"}}>
        <Grid item>
          <Typography>Experience : {expSelect[exp]}</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Deadline : {deadlineSelect[deadline]}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Category : {catSelect[category]}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item>
        <Typography sx={{fontSize:"17px"}}>$ {budget}</Typography>
        </Grid>
        <Grid item>
          {page=="talent"?<Button variant='contained' onClick={()=>placeBidHandler(index)} sx={{background:"#2EB624"}}>Place Bid</Button>:<Button onClick={()=>viewBidsHandler(index)} variant='contained' sx={{background:"#2EB624"}}>View Bids</Button>}  
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Post
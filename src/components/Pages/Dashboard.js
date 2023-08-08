import { Button, Container, Modal ,Box,Grid, Typography} from '@mui/material'
import React, { useState } from 'react'
import { usePost } from '../../context/PostContext'
import NewPost from '../NewPost';
import Post from '../Post';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "600px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid grey",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};



const Dashboard = () => {
    const [formOpen,setFormOpen]=useState(false);
    const [bidsModal,setBidsModal]=useState(false);
    const [bidsIndex,setBidsIndex]=useState(0);
    const {jobs}=usePost()

    const bidsModalHandler=()=>{
      setBidsModal(prev=>!prev);
    }

    const modalhandler=()=>{
      setFormOpen(prev=>!prev)
    }

    const viewBidsHandler=(index)=>{
      setBidsIndex(index);
      bidsModalHandler();
    }

  return (
    <Container sx={{width:"800px"}}>
        <Button onClick={modalhandler} sx={{marginY:"30px",background:"#6B9CFF"}} variant="contained">Create Post</Button>
        <Modal
        open={formOpen}
        onClose={modalhandler}
        >
          <NewPost setFormOpen={setFormOpen}/>         
        </Modal>

        <Modal
        open={bidsModal}
        onClose={bidsModalHandler}
        >
          <Box sx={style}>
          {jobs.length!=0?jobs[bidsIndex].bids.map(item=><Box sx={{borderBottom:"1px solid #D8D8D8",padding:1,width:"100%"}} >
            <Grid container sx={{width:"100%",justifyContent:"space-between"}}>
            <Grid item>
              <Typography fontSize={"20px"}>{item.name}</Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={"20px"}>{item.price} $</Typography>
            </Grid>
          </Grid>
          <Box sx={{width:"100%",paddingY:1}}><Typography fontSize={"18px"}>{item.message}</Typography> </Box>
          </Box>
          ):null}
          </Box>
        </Modal>

        
        {jobs.map((item,index)=>
        <Post title={item.title} desc={item.desc} exp={item.exp} deadline={item.deadline} category={item.category} index={index} viewBidsHandler={viewBidsHandler}  budget={item.budget} />
          )}

    </Container>
  )
}

export default Dashboard
import React, { useRef } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  TextField,
} from "@mui/material";
import { usePost } from "./context/PostContext";

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

const PostBid = ({index,modalHandler,name}) => {
  const budgetRef = useRef();
  const messageRef=useRef();
  const {jobs,setJobs}=usePost()

  const submitHandler=()=>{
    const temp=[...jobs];
    const tempBids=[...temp[index].bids]
    tempBids.push({
        name:name,
        price:budgetRef.current.value,
        message:messageRef.current.value
    })
    temp[index].bids=tempBids;
    console.log(temp);
    setJobs(temp);
    modalHandler();
  }

  return (
    <Box sx={style}>
      <label>
        <Typography> Bid Price</Typography>
      </label>
      <FormControl sx={{ width: "150px", margin: "8px 0 20px" }}>
        <OutlinedInput
          inputRef={budgetRef}
          size="small"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <label>
        <Typography> Message</Typography>
      </label>
      <TextField inputRef={messageRef} sx={{width:"100%",margin:"8px 0 20px"}} multiline rows={4} size='small' />
      <Button onClick={submitHandler} sx={{ width: "100%" }} variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default PostBid;

import { Button, Container, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { usePost } from '../../context/PostContext';
import PostBid from '../../PostBid';
import Post from '../Post';
import { useAuth } from '../../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

const TalentDashboard = () => {
    const [formOpen,setFormOpen]=useState(false);
    const [currentIndex,setCurrentIndex]=useState(0);
    const {jobs}=usePost();
    const {currentUser}=useAuth()
    const [userData,setUserData]=useState()

    const fetchUserData=async()=>{
      try{
      const docRef=doc(db,"users",auth.currentUser.uid)
      const snap=await getDoc(docRef);
      if(snap.exists()){
        setUserData(snap.data())
      }
      }
      catch(err){
        console.log(err)
      }
    }


    useEffect(()=>{
      fetchUserData();
    },[])

    const modalhandler=()=>{
      setFormOpen(prev=>!prev)
    }

  const placeBidHandler=(index)=>{
    modalhandler();
    setCurrentIndex(index)
  }



  return (
    <Container sx={{width:"800px"}}>
      <Modal open={formOpen}  onClose={modalhandler}>
      <PostBid name={userData?.name} modalHandler={modalhandler} index={currentIndex}/>
      </Modal>

        {jobs.map((item,index)=><Post index={index} exp={item.exp} deadline={item.deadline} category={item.category} title={item.title} desc={item.desc} placeBidHandler={placeBidHandler} budget={item.budget} page={"talent"} />)}
    </Container>
  )
}

export default TalentDashboard
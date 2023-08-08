import React, { createContext, useContext, useState } from 'react'

const PostContext=createContext()

export const usePost=()=>{
    return useContext(PostContext)
}

export const PostProvider = ({children}) => {
    const [jobs,setJobs]=useState([])

    const value={jobs,setJobs}
  return (
    <PostContext.Provider value={value}>
        {children}
    </PostContext.Provider>
  )
}

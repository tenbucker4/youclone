import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material"
import SideBar from './SideBar'
import Videos from './Videos'

import { fetchFromAPI } from '../tools/fetchAPI';

const Main = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
    })
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </Box>
      <Box px={2} sx={{ overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography py={2}>
          <span style={{color: "white"}}>{`Browsing ${selectedCategory} Videos`}</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Main
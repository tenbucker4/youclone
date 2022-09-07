import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import Videos from './Videos';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../tools/fetchAPI';

const SearchOutput = () => {
  const { searchQuery } = useParams();
  const [videos, setVideos] = useState([])
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchQuery}`)
      .then((data) => setVideos(data.items))
  }, [searchQuery]);


  return (
    <Box px={2} sx={{ overflowY: "auto", height: "90vh", flex: 2}}>
      <Typography py={2}>
        <span style={{color: "white"}}>{`Showing results for ${searchQuery}`}</span>
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchOutput
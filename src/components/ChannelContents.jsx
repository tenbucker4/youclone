import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from '../tools/tools'
import Videos from "./Videos";
import { fetchFromAPI } from "../tools/fetchAPI";
import ChannelContainer from './ChannelContainer';


const ChannelContents = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));

  }, [id])

  return (
    <Box minHeight="90vh" sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <ChannelContainer channelDetails={channelDetail}/>
        <Videos videos={videos}/>
    </Box>
  )
}

export default ChannelContents
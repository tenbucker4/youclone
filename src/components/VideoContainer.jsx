import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const VideoContainer = ( { video: { id: { videoId }, snippet } }) => {


  return (
    <Card sx={{ border: "none", borderRadius: 0, boxShadow: "none", width: {xs: "100%", sm:"300px", md: "300px" }}}>
        <Link to={videoId ? `/youclone/video/${videoId}` : null}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
             sx={{ width: {xs: "100%", sm:"300px", md: "300px"}, height: 180, backgroundColor:"#0f0f0f"}}/>
        </Link>
        <CardContent sx={{ backgroundColor: "#0f0f0f", height: "100px"}}>
            <Link to={videoId ? `/youclone/video/${videoId}` : null } >
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0, 60) || "Video Title"}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/youclone/channel/${snippet?.channelId}` : null} >
                <Typography variant="subtitle2" color="gray">
                {snippet?.channelTitle || "Channel Title"}
                <CheckCircle sx={{ fontSize:"14px", pl:"2px"}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoContainer